import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurfs from "../components/Smurfs";

class SmurfsView extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return <Smurfs smurfs={this.props.smurfs} />;
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfsView);
