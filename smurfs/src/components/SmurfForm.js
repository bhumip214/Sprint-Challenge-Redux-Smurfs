import React from "react";

const SmurfForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.addNewSmurf();
  };

  return (
    <div>
      <div className="SmurfForm">
        <h2>Add New Smurf</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={props.handleChanges}
            placeholder="Name"
            value={props.smurf.name}
            name="name"
          />
          <input
            type="number"
            onChange={props.handleChanges}
            placeholder="Age"
            value={props.smurf.age}
            name="age"
          />
          <input
            type="text"
            onChange={props.handleChanges}
            placeholder="Height(cm)"
            value={props.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
      <img
        className="lost-smurfs-img"
        src="https://cdn.vox-cdn.com/thumbor/oIRY68qFM3SiUyNQWoYwt_c3BM4=/0x0:2560x1600/1200x800/filters:focal(1662x443:2070x851)/cdn.vox-cdn.com/uploads/chorus_image/image/54121337/smurfscover.0.jpg"
        alt="Smurfs Lost in Village"
      />
    </div>
  );
};

export default SmurfForm;
