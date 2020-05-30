import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getData } from "../actions";

const SmurfsList = (props) => {
  useEffect(() => {
    props.getData();
  }, []);
  console.log("smurfs in SmurfsList", props.smurfs);

  return (
    <div className="smurf">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.smurfs.map((smurf) => <Smurf key={smurf.id} smurf={smurf} />)
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(SmurfsList);
