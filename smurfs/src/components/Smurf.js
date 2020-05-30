import React, { useState } from "react";

const Smurf = (props) => {
  return (
    <div className="smurf-list ">
      <div>
        <h2 style={{ paddingLeft: "2rem" }}>Name: {props.smurf.name}</h2>
        <h3 style={{ paddingLeft: "2rem" }}>Age: {props.smurf.age}</h3>
        <h3 style={{ paddingLeft: "2rem" }}>Height: {props.smurf.height}</h3>
      </div>
    </div>
  );
};
export default Smurf;
