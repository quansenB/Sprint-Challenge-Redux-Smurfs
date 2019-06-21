import { connect } from "react-redux";
import { getSmurfs } from "../actions/index.js";
import React from "react";
import Smurf from "./Smurf.jsx";

class Smurfs extends React.Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <div className="smurfContainer">
          <div className="smurf">Fetching Data, please wait...</div>
          {this.props.error && <div>{this.props.error}</div>}
        </div>
      );
    } else {
      return (
        <div className="smurfContainer">
          {this.props.smurfs.map(smurf => (
            /* console.log(smurf.id) */
            <Smurf name={smurf.name} height={smurf.height} age={smurf.age} key={smurf.id}/>
          ))}
          {this.props.error && <div>{this.props.error}</div>}
        </div>
      );
    }
  }
}


function mapStateToProps(state) {
  return {
    smurfs: state.smurfs.smurfs,
    fetchingSmurfs: state.smurfs.fetchingSmurfs,
    error: state.smurfs.error
  };
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(Smurfs);
