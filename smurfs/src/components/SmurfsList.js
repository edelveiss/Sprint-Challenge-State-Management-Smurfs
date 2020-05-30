import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getData } from "../actions";
import SmurfsForm from "./SmurfsForm";

const SmurfsList = () => {
  return <div>SmurfsList</div>;
};
export default SmurfsList;

// const SmurfsList = () => {
//   return
//   <div>SmurfsList</div>;

// };
// export default SmurfsList;

// const mapStateToProps = (state) => {
//   return {
//     smurfs: state.smurfs,
//     error: state.error,
//   };
// };

// export default connect(mapStateToProps, { getData })(SmurfsList);
