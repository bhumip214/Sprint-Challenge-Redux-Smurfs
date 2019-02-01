import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
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

  addNewSmurf = () => {
    this.props.addSmurf(this.state).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="adding-smurf-error">
          {this.props.error ? this.props.error.response.data.Error : null}
        </div>

        <SmurfForm
          handleChanges={this.handleChanges}
          smurf={this.state}
          addNewSmurf={this.addNewSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(FormView);
