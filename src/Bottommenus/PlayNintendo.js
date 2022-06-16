import React from "react";

export default function PlayNintendo() {
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
            data-testid="StarPlayNintendoIcon"
            size="18"
            color="currentColor"
          >
            <path
              d="M18.9 19.1c-.9 0-1-1.5-1-3.4s0-3.5 1-3.4c.9.1 1.1 1.4 1.1 3.3-.1 2-.2 3.5-1.1 3.5m-5.8 0c-.9 0-1-1.6-1-3.4 0-1.9.2-3.2 1.1-3.3 1-.1 1 1.5 1 3.4-.1 1.8-.2 3.3-1.1 3.3M32 12.4c-.1-.3-1.4-.6-5.6-1.1-2.6-.3-5.1-.5-5.2-.5-.2 0-.4-.2-.5-.4-.6-1.6-1.3-3.3-2-4.8C17.1 1.8 16.4.7 15.9.7c-.4 0-1 1.1-2.8 5-1.1 2.4-2 4.8-2 4.8-.1.2-.3.4-.5.4 0 0-2.5.1-5.1.4-4.1.4-5.4.7-5.5 1-.1.4.8 1.3 3.9 4.2 1.9 1.8 3.9 3.4 3.9 3.4.2.1.2.3.2.4v.1s-.6 2.5-1.2 5.1c-.6 3-1.1 5.4-.7 5.7.4.4 1.8-.5 5.2-2.4 2.3-1.3 4.4-2.7 4.5-2.7.2-.1.4-.1.6 0 0 0 2.2 1.4 4.4 2.7 3.4 2 4.7 2.7 5.2 2.4.4-.3 0-2.1-.7-5.7-.5-2.6-1.2-5.1-1.2-5.1v-.1c0-.2.1-.3.2-.4 0 0 1.9-1.6 3.9-3.3 3-2.9 3.9-3.9 3.8-4.2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span className="StoreTxt">Play Nintendo</span>
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
