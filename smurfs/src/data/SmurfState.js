import React from "react";
import { connect } from "react-redux";
import { getData } from "./actions";

const SmurfState = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.getData();
        }}
      >
        Press Here for Smurfs
      </button>
      {props.error && <div>{props.error}</div>}
      {props.isLoading ? (
        <div>Loading... Don't get Blue</div>
      ) : (
        <div>
          <h1>Name: {props.smurf.name}</h1>
          <p>Age: {props.smurf.age}</p>
          <p>Height: {props.smurf.Height}</p>
        </div>
      )}
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
