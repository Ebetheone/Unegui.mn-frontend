import React from "react";
import { MoonLoader } from "react-spinners";

const Spinner = (props) => {
  return (
    <>
      {props.loading && (
        <MoonLoader color="#000" size={100} speedMultiplier={1} />
      )}
    </>
  );
};

export default Spinner;
