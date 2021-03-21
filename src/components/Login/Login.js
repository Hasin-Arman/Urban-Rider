import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare, faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from '../../firebase.config'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [signedInUser, setSignedInUser] = useState();
  const [user, setUser] = useState({
    name: '',
    email: '',
    error: '',
    confirmPassword: '',
    password: ''
  });
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const handleBlur = (event) => {
    console.log(event.target.name, event.target.value)
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /^\S+@\S+\.\S+$/.test(event.target.value);

    }
    if (event.target.name === "password") {
      isFieldValid = /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(event.target.value) && event.target.value.length > 6;

    }
    if (isFieldValid === true) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (event) => {

    if (user.email && (user.password === user.confirmPassword)) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          console.log(user);
          updateUserName(user.name);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          const newUser = { ...user };
          newUser.error = errorMessage;
          // newUser[error] =errorMessage;
          setUser(newUser);
        
          // ..
        });
    }
    event.preventDefault();
  }

  const updateUserName = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log('name updated successfully')
    }).catch(function (error) {
      console.log(error)
    });
  }

  //     if(!newUser&&user.email&&user.password){

  //     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  //     .then((userCredential) => {
  //       // Signed in
  //       var user = userCredential.user;
  //       setLoggedInUser(user);
  //       history.replace(from);

  //       // ...
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;

  //     });

  //     }
  //   event.preventDefault();
  // }

  return (
    <div>
      <Header></Header>


      <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "50px" }}>

        <input type="text" name="name" onBlur={handleBlur} placeholder="Enter your name" id="" />
        <br />
        <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your e-mail" id="" required />
        <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="Enter your password" id="" required />
        <br />
        <input type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm your password" id="" required />
        <br />
        <br />
        <input type="submit" value='Create an account' />

        <p style={{ color: 'red' }}>{user.error}</p>
      </form>

    </div>
  );

};

export default Login;