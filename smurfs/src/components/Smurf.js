import React from "react";

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="Smurf-header">
        <h3>{props.name}</h3>
        <div>
          <img
            className="trash-icon"
            src="https://img.icons8.com/dusk/20/000000/filled-trash.png"
            alt="trash-icon"
          />
        </div>
      </div>
      <strong>Height: {props.height} tall </strong>
      <p>Age: {props.age} smurf years old</p>
    </div>
  );
};

export default Smurf;
