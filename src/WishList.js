import React from "react";

export default function WishList() {
  return (
    <div>
      <a className="ButtonLinkWshLst" href="">
        <span type="secondary" className="HeartIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="18"
            size="18"
            color="currentColor"
          >
            <path
              d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span type="secondary" className="HeartIconTxt">
          {" "}
          WishList
        </span>
      </a>
    </div>
  );
}