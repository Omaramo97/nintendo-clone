import React from "react";

export default function NewsEvents() {
  return (
    <div>
      <a className="ButtonLink" href="">
        <span className="StoreDropDown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="18"
            role="presentation"
            alt=""
            data-testid="NewsIcon"
            size="18"
            color="currentColor"
          >
            <path
              fill="currentColor"
              d="M31.92 3.62a1.945 1.945 0 0 0-1.953-1.932H1.874A1.945 1.945 0 0 0-.08 3.62v10.068h32zm-32 11.692v7.201a2.027 2.027 0 0 0 1.954 1.998h8.711a2.777 2.777 0 0 1 2.178 1.073q2.97 4.736 3.315 4.728.344-.009 3.315-4.837a2.677 2.677 0 0 1 2.177-.964h8.398a2.027 2.027 0 0 0 1.953-1.998v-7.201zm14 5.15c0 .056-.07.1-.155.1H3.077c-.086 0-.156-.044-.156-.1v-1.051c0-.055.07-.1.156-.1h10.688c.086 0 .156.045.156.1z"
            ></path>
          </svg>
        </span>
        <span className="StoreTxt">News & Events</span>
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
      </a>
    </div>
  );
}
