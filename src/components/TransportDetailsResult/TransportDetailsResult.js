import React from 'react';
import map from '../../images/Map.png';
import people from '../../images/peopleicon.png'
import Map from '../Map/Map';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const TransportDetailsResult = (props) => {
  const { name, image } = props.result;
  return (
    <div className="container">

      <div className="row">
        <div style={{ backgroundColor: "tomato", height: "500px", borderRadius: "20px" }} className="col-md-5">
          {/* <h3>{props.origin}</h3>
                    <h4>To</h4>
                    <h3>{props.destination}</h3> */}
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot  color="secondary"/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{fontWeight:"bold"}}>{props.origin}</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot  color="primary" />
              </TimelineSeparator>
              <TimelineContent style={{fontWeight:"bold"}}>{props.destination}</TimelineContent>
            </TimelineItem>

          </Timeline>
          <div style={{ backgroundColor: "lightgray", padding: "10px", borderRadius: "10px", marginBottom: "10px" }} className="d-flex">
            <img style={{ height: "70px", marginRight: "10px" }} src={image} alt="" />
            <b>{name}</b>
            <img style={{ height: "25px", marginLeft: "10px" }} src={people} alt="" />
            <b style={{ marginRight: "10px" }}>4</b>
            <b>$65</b>
            <br />
          </div>
          <div style={{ backgroundColor: "lightgray", padding: "10px", borderRadius: "10px", marginBottom: "10px" }} className="d-flex">
            <img style={{ height: "80px", marginRight: "10px" }} src={image} alt="" />
            <b>{name}</b>
            <img style={{ height: "25px", marginLeft: "10px" }} src={people} alt="" />
            <b style={{ marginRight: "10px" }}>4</b>
            <b>$65</b>
            <br />
          </div>
          <div style={{ backgroundColor: "lightgray", padding: "10px", borderRadius: "10px", marginBottom: "10px" }} className="d-flex">
            <img style={{ height: "80px", marginRight: "10px" }} src={image} alt="" />
            <b>{name}</b>
            <img style={{ height: "25px", marginLeft: "10px" }} src={people} alt="" />
            <b style={{ marginRight: "10px" }}>4</b>
            <b>$65</b>
            <br />
          </div>
        </div>
        <div className="col-md-7">
          <Map></Map>
        </div>

      </div>

    </div>
  );
};

export default TransportDetailsResult;