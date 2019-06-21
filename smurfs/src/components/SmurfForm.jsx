import { connect } from "react-redux";
import { postSmurf } from "../actions/index.js";
import React from "react";

function SmurfForm(props) {

  let refName = React.createRef();
  let refAge = React.createRef();
  let refHeight = React.createRef();

  const addSmurf = function(e) {
    e.preventDefault();
    postSmurf(
      refName.current.value,
      refHeight.current.value,
      refAge.current.value + "cm"
    );
    refName.current.value = "";
    refAge.current.value = "";
    refHeight.current.value = "";
  };

  return (
    <div>
      <form onSubmit={addSmurf}>
        <input
          type="text"
          placeholder="Smurf Name"
          ref={refName}
          value={refName.current.value}
        />
        <input
          type="number"
          placeholder="Smurf Age"
          ref={refName}
          value={refName.current.value}
        />
        <input
          type="number"
          placeholder="Smurf Height"
          ref={refName}
          value={refName.current.value}
        />
      </form>
      {props.error && <div>{props.error}</div>}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    error: state.smurfs.error
  };
}

export default connect(
  mapStateToProps,
  { postSmurf }
)(SmurfForm);
