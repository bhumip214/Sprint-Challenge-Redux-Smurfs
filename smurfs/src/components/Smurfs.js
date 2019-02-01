import React from "react";
import Smurf from "./Smurf";

const Smurfs = props => {
  return (
    <div className="Smurfs">
      <div>
        <img
          className="smurfs-village-img"
          src="https://www.topbestalternatives.com/wp-content/uploads/2017/11/smurfs-village.jpg"
          alt="Smurfs Village"
        />
      </div>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              deleteSmurf={props.deleteSmurf}
            />
          );
        })}
      </ul>
    </div>
  );
};

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
