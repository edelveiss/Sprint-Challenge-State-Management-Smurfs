import React, { useState } from "react";
import { connect } from "react-redux";

import { getPostData } from "../actions";

const SmurfsForm = (props) => {
  const initialPostState = {
    name: "",
    age: "",
    height: "",
    id: "",
  };
  const [postState, setPostState] = useState(initialPostState);
  const formSubmit = (e) => {
    e.preventDefault();
    props.getPostData(postState);

    setPostState({
      name: "",
      age: "",
      height: "",
      id: "",
    });
  };
  const inputChange = (e) => {
    console.log("input changed", e.target.value);

    const newPostData = {
      ...postState,
      [e.target.name]: e.target.value,
    };

    setPostState(newPostData);
  };

  return (
    <div className="smurf-form">
      <h2>Add new Smurf</h2>

      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            onChange={inputChange}
            value={postState.name}
          />
        </label>

        <label htmlFor="age">
          Age
          <input
            id="age"
            type="text"
            name="age"
            onChange={inputChange}
            value={postState.age}
          />
        </label>

        <label htmlFor="height">
          Height
          <input
            id="height"
            type="text"
            name="height"
            onChange={inputChange}
            value={postState.height}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPostData })(SmurfsForm);
//export default SmurfsForm;
