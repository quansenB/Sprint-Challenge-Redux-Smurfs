import { connect } from "react-redux";
import { getSmurfs } from "../actions/index.js";
import React from "react";

class Smurfs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <div>
          <div>Fetching Data, please wait...</div>
          {this.props.error && <div>{this.props.error}</div>}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.smurfs.map(smurf => (
            <div className="smurf">
              <h2>{smurf.name}</h2>
              <div>Age: {smurf.age}</div>
              <div>Height: {smurf.height}</div>
            </div>
          ))}
          {this.props.error && <div>{this.props.error}</div>}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    smurfs: state.rootReducer.smurfs,
    fetchingSmurfs: state.rootReducer.fetchingSmurfs,
    error: state.rootReducer.error
  };
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(Smurfs);
