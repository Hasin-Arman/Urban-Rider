import React from 'react';
import { useContext, useState } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import { Link } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const SignIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [signedInUser, setSignedInUser] = useState({});
    const [user, setUser] = useState({
        name: '',
        email: '',
        error: '',
        password: ''
    });
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleFacebookSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
    
        // The signed-in user info.
        var user = result.user;
        setLoggedInUser(user);
        history.replace(from);
        console.log(user)
    
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;
    
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    
        // ...
      });
        
      }

    const handleBlur = (event) => {
        console.log(event.target.value,event.target.name)
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
        if (user.email && user.password) {

            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    setLoggedInUser(user);
                    history.replace(from);
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                });

        }
        event.preventDefault();
    }


return (
    <div>

        <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "50px" }} action="">
            <input type="text" name="email" id="" onBlur={handleBlur} placeholder="Enter your email address" required />
            <br />
            <input type="password" name="password" id="" onBlur={handleBlur} placeholder="Enter your password" required />
            <br />
            <br />
            <input type="submit" value="Sign in" />
            <p>Doesn't have an account?<Link to='/login'> Sign up</Link></p>
            <br/>
            <p>-------Or-------</p>
            <p>Sign in with</p>
        </form>
        <button style={{ marginLeft: "635px" }} onClick={handleFacebookSignIn} className="btn btn-primary">Facebook</button>
    </div>
);
    
};

export default SignIn;