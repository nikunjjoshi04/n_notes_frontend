import React from "react";

const Alert = (props) => {
  return (
    <div
      className="alert alert-dark alert-dismissible fade show"
      role="alert"
    >
      <strong>{props.type}</strong> {props.message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
};

export default Alert;
