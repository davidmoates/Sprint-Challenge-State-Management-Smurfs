import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import axios from "axios";

const SmurfState = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const newSmurf = {
    name: name,
    age: age,
    height: height
  };

  const handleGetSmurfs = () => {
    props.getData();
  };

  const handleAddSmurf = event => {
    event.preventDefault();
    setName("");
    setAge("");
    setHeight("");

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(results => {
        console.log("Post Results: ", results);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  return (
    <div>
      <button onClick={handleGetSmurfs}>Press Here for Smurfs</button>
      {props.smurf.map(event => {
        return (
          <div>
            <p>
              Hi my name is {event.name}. I am {event.age} years old and I stand{" "}
              {event.height} tall. Nice to meet you!!
            </p>
          </div>
        );
      })}
      <input
        onChange={event => {
          setName(event.target.value);
        }}
        value={name}
        placeholder="name"
      />
      <input
        onChange={event => {
          setAge(event.target.value);
        }}
        value={age}
        placeholder="age"
      />
      <input
        onChange={event => {
          setHeight(event.target.value);
        }}
        value={height}
        placeholder="height"
      />
      <button onClick={handleAddSmurf}>Add Smurf</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurf: state.smurf
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfState);
