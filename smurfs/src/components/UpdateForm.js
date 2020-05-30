import React, { useState } from "react";
import { connect } from "react-redux";
import { updateData } from "../actions";

const UpdateForm = (props) => {
  const [editState, setEditState] = useState(props.smurf);
  const inputChange = (e) => {
    const newEditData = {
      ...editState,
      [e.target.name]: e.target.value,
    };
    setEditState(newEditData);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    props.updateData(editState);
    props.toggle();
  };
  const formCancel = (e) => {
    e.preventDefault();
    props.toggle();
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            onChange={inputChange}
            defaultValue={props.smurf.name}
          />
        </label>

        <label htmlFor="age">
          Age
          <input
            id="age"
            type="text"
            name="age"
            onChange={inputChange}
            defaultValue={props.smurf.age}
          />
        </label>

        <label htmlFor="height">
          Height
          <input
            id="height"
            type="text"
            name="height"
            onChange={inputChange}
            defaultValue={props.smurf.height}
          />
        </label>
        <div style={{ display: "flex" }}>
          <button type="submit">Submit</button>
          <button style={{ marginLeft: "1rem" }} onClick={formCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
//export default UpdateForm;
export default connect(null, { updateData })(UpdateForm);
