import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getData } from "../actions";

const SmurfsList = (props) => {
  useEffect(() => {
    props.getData();
  }, []);
  console.log("smurfs in SmurfsList", props.smurfs);
  return <div>SmurfsList</div>;
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(SmurfsList);
