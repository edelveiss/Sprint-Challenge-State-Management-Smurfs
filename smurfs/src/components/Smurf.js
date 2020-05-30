import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteData } from "../actions";
import UpdateForm from "./UpdateForm";

const Smurf = (props) => {
  const [updateToggle, setUpdateToggle] = useState(false);
  const deleteSmurf = (e) => {
    e.preventDefault();
    props.deleteData(props.smurf.id);
  };

  const toggle = () => {
    setUpdateToggle(!updateToggle);
  };

  return (
    <div className="smurf-list ">
      {updateToggle ? (
        <UpdateForm smurf={props.smurf} toggle={toggle} />
      ) : (
        <div>
          <h2 style={{ paddingLeft: "2rem" }}>Name: {props.smurf.name}</h2>
          <h3 style={{ paddingLeft: "2rem" }}>Age: {props.smurf.age}</h3>
          <h3 style={{ paddingLeft: "2rem" }}>Height: {props.smurf.height}</h3>
          <button onClick={toggle} className="item-button">
            Update
          </button>
          <button onClick={deleteSmurf} className="item-button">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
//export default Smurf;
export default connect(null, { deleteData })(Smurf);
