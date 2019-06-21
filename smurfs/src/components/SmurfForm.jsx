import { connect } from "react-redux";
import { postSmurf } from "../actions/index.js";
import React from "react";

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  changeName = event => {
    this.setState({ name: event.target.value });
  };

  changeAge = event => {
    this.setState({ age: event.target.value });
  };

  changeHeight = event => {
    this.setState({ height: event.target.value });
  };

  addSmurf = event => {
    event.preventDefault();
    this.props.postSmurf({
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      height: parseInt(this.state.height, 10) + "cm"
    });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.addSmurf}>
          <input
            className="input"
            type="text"
            placeholder="Smurf Name"
            value={this.state.name}
            onChange={this.changeName}
          />
          <br />
          <input
            className="input"
            type="number"
            placeholder="Smurf Age"
            value={this.state.age}
            onChange={this.changeAge}
          />
          <br />
          <input
            className="input"
            type="number"
            placeholder="Smurf Height"
            value={this.state.height}
            onChange={this.changeHeight}
          />
          <br />
          <input
            className="input inputSubmit"
            type="submit"
            value="Submit Smurf"
            onSubmit={this.addSmurf}
          />
        </form>
        {this.props.error && <div>{this.props.error}</div>}
      </div>
    );
  }
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
