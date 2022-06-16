import React from "react";

export default function Games() {
  return (
    <div>
      <button className="ButtonLink">
        <span className="StoreDropDown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="18"
            role="presentation"
            alt=""
            data-testid="DPadIcon"
            size="18"
            color="currentColor"
          >
            <path
              d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span className="StoreTxt">Games</span>
        <span className="StoreStyle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="14"
            role="presentation"
            alt=""
            data-testid="ChevronDownIcon"
            size="14"
            color="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
              d="M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
}