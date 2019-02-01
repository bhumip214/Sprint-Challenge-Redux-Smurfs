import React from "react";
import { connect } from "react-redux";

import SmurfForm from "../components/SmurfForm";

class FormView extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <SmurfForm handleChanges={this.handleChanges} smurf={this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(FormView);
