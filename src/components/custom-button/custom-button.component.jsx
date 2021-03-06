import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isFacebookSignIn,
  isCartButton,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`${isFacebookSignIn ? "facebook-sign-in" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } ${isCartButton ? "cart-button" : ""} custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
