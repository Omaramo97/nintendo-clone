import React, { useState, useRef } from "react";

const TopNav = () => {
  const dropdownref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div>
      <form className="PickAnChoose">
        <div className="Menu-Container">
          <button onClick={onClick} className="BarInput">
            <svg
              data-name="Magnifying glass"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="18"
              role="presentation"
              alt=""
              data-testid="MGI"
              size="18"
              color="currentColor"
            >
              <path
                d="M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Search games, hardware, news, etc</span>
          </button>
          <nav
            ref={dropdownref}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a href="#">Animal Crossing</a>
              </li>
              <li>
                <a href="#">Nintendo Switch</a>
              </li>
              <li>
                <a href="#">Nintendo Switch games</a>
              </li>
              <li>
                <a href="#">Zelda games</a>
              </li>
              <li>
                <a href="#">Pokemon games</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="CategorySelector">
          <div className="SelectControl">
            <div className="SelectItems">All Categories</div>
            <input
              className="DropDownList"
              tabIndex="0"
              inputMode="none"
              aria-autocomplete="list"
              aria-haspopup="true"
              aria-label="All categories"
              aria-readonly="true"
            ></input>
          </div>
          <div className="ArrowUpAnDown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="Arrow"
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
          </div>
        </div>
      </form>
    </div>
  );
};
export default TopNav;
