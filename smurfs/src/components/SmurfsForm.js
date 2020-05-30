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
  const cancelNewPost = (e) => {
    e.preventDefault();
    setPostState({
      name: "",
      age: "",
      height: "",
      id: "",
    });
  };

  return (
    <div className="smurf-form">
      <div style={{ width: "100%" }}>
        <h2
          style={{
            background: "#afeeed",

            textAlign: "center",
          }}
        >
          Add new Smurf
        </h2>
      </div>
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
        <div style={{ display: "flex" }}>
          <button type="submit">Submit</button>
          <button style={{ marginLeft: "1rem" }} onClick={cancelNewPost}>
            Cancel
          </button>
        </div>
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
