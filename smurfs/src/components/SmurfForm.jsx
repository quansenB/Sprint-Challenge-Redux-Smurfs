import { connect } from "react-redux";
import { postSmurf } from "../actions/index.js";

class Smurfs extends React.Component {
  constructor(props) {
    super(props);
    const refName = React.createRef();
    const refAge = React.createRef();
    const refHeight = React.createRef();
  }

  addSmurf(e) {
    e.preventDefault();
    postSmurf(
      refName.current.value,
      refHeight.current.value,
      refAge.current.value + "cm"
    );
    refName.current.value = "";
    refAge.current.value = "";
    refHeight.current.value = "";
  }

  render() {
    return (
      <form onSubmit={this.addSmurf}>
        <input
          type="text"
          placeholder="Smurf Name"
          ref={this.refName}
          value={this.refName.current.value}
        />
        <input
          type="number"
          placeholder="Smurf Age"
          ref={this.refName}
          value={this.refName.current.value}
        />
        <input
          type="number"
          placeholder="Smurf Height"
          ref={this.refName}
          value={this.refName.current.value}
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.rootReducer.error
  };
}

export default connect(
  mapStateToProps,
  { postSmurfs }
)(SmurfForm);
