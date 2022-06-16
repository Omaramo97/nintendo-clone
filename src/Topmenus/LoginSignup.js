import React, { useState } from "react";

export default function LoginSignup(props) {
  let handleClick = () => {
    props.toggle();
  };

  return (
    <div>
      <button className="ButtonSign">
        <span type="secondary" className="SignupIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="18"
            size="18"
            color="currentColor"
          >
            <path
              d="M16.22 19.41A9.71 9.71 0 1 1 26 9.7a9.74 9.74 0 0 1-9.8 9.71M1.84 32a10.88 10.88 0 0 1 10.94-10.74h6.57A10.88 10.88 0 0 1 30.29 32H1.84"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span type="secondary" className="SignUpTxt" onClick={handleClick}>
          Log in / Sign up
        </span>
      </button>
    </div>
  );
}
