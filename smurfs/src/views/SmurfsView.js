import React from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf } from "../actions";
import Smurfs from "../components/Smurfs";

class SmurfsView extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  };
  render() {
    return <Smurfs smurfs={this.props.smurfs} deleteSmurf={this.deleteSmurf} />;
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf }
)(SmurfsView);
