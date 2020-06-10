import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ type, label, ...otherProps }) => {
  return (
    <div className="form-input">
      <input type={type} {...otherProps} />
      {label ? <label>{label}</label> : null}
    </div>
  );
};

export default FormInput;
