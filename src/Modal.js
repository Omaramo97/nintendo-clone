import React from "react";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title"> Login / Signup</h2>
          <button onClick={props.onClose} className="modal-close">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              role="presentation"
              alt=""
              data-testid="CloseCircleIcon"
              size="26"
              color="currentColor"
            >
              <path
                d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.735 8L16 13.735 10.265 8 8 10.265 13.735 16 8 21.735 10.265 24 16 18.265 21.735 24 24 21.735 18.265 16 24 10.265 21.735 8z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-wrap">
            <div className="modal-imagewrap">
              <img
                role="presentation"
                alt=""
                class="Imagestyles__CloudinaryImage-sc-1oi2gnz-1 hFNlYD"
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/Dev/Global%20Navigation/unauthd-asset.png"
              />
            </div>
            <div className="modal-listwrap">
              <p>With a free account you can</p>
              <p>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="11"
                  role="presentation"
                  alt=""
                  data-testid="CheckmarkIcon"
                  size="11"
                  color="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M26.737 2L12.786 21.945 4.047 15.82.5 20.394 14.204 30 31.5 5.274 26.737 2z"
                  ></path>
                </svg>
                Shop Online
              </p>
              <p>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="11"
                  role="presentation"
                  alt=""
                  data-testid="CheckmarkIcon"
                  size="11"
                  color="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M26.737 2L12.786 21.945 4.047 15.82.5 20.394 14.204 30 31.5 5.274 26.737 2z"
                  ></path>
                </svg>
                Earn My Nintendo Points
              </p>
              <p>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="11"
                  role="presentation"
                  alt=""
                  data-testid="CheckmarkIcon"
                  size="11"
                  color="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M26.737 2L12.786 21.945 4.047 15.82.5 20.394 14.204 30 31.5 5.274 26.737 2z"
                  ></path>
                </svg>
                Save a Wish List
              </p>
            </div>
          </div>

          <a href="/Accounts" className="modal-buttons">
            <span className="modal-login"> Log In</span>
          </a>
          <a className="modal-signup" href="/Register">
            Sign Up
          </a>

          <div className="modal-menus">
            <div>
              <a className="modal-orderlink" href="">
                <div className="modal-orderSvg">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    role="presentation"
                    alt=""
                    data-testid="ReceiptIcon"
                    size="18"
                    color="currentColor"
                  >
                    <path
                      d="M26 1.6L24 0l-2 1.6L20 0l-2 1.6L16 0l-2 1.6L12 0l-2 1.6L8 0 6 1.6 4 0v30.4L6 32l2-1.6 2 1.6 2-1.6 2 1.6 2-1.6 2 1.6 2-1.6 2 1.6 2-1.6 2 1.6 2-1.6V0l-2 1.6zM8 6h8v2H8V6zm16 20H8v-2h16v2zm0-4H8v-2h16v2zm0-4H8v-2h16v2zm0-4H8v-2h16v2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>Order Status</span>
                </div>
              </a>
            </div>
            <div className="modal-liststyling">
              <a href="" className="modal-orderlink">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  role="presentation"
                  alt=""
                  data-testid="MyNintendoTileIcon"
                  size="18"
                  color="currentColor"
                >
                  <path
                    d="M26.667 0H5.333A5.333 5.333 0 0 0 0 5.333v21.334A5.333 5.333 0 0 0 5.333 32h21.334A5.333 5.333 0 0 0 32 26.667V5.333A5.333 5.333 0 0 0 26.667 0zm-5.105 22.423a5.212 5.212 0 0 1-2.37-.602 10.482 10.482 0 0 1-13.67-1.608.803.803 0 0 1 1.228-1.036 8.866 8.866 0 0 0 11.914 1.04.803.803 0 0 1 .986-.005 3.461 3.461 0 0 0 5.41-2.888 3.495 3.495 0 0 0-3.39-3.416c-.016 0-.036 0-.063-.002a.962.962 0 0 0-.12.003.806.806 0 0 1-.778-.455 6.54 6.54 0 0 0-5.992-3.848c-2.82 0-5.738 1.802-5.738 4.819-.003.818.35 1.596.969 2.132l1.688-3.147a.803.803 0 0 1 1.423.015l.982 1.926.983-1.926a.8.8 0 0 1 .71-.438c.3 0 .574.164.716.428l2.076 3.933a.8.8 0 0 1-.03.804.802.802 0 0 1-1.391-.054l-1.353-2.564-.995 1.95a.803.803 0 0 1-1.431-.001l-1-1.96-1.384 2.58a.805.805 0 0 1-1.046.349 4.563 4.563 0 0 1-2.524-4.027C7.372 10.403 11.107 8 14.717 8a8.081 8.081 0 0 1 7.209 4.308 5.063 5.063 0 0 1-.363 10.115z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span>My Nintendo</span>
              </a>
              <a href="" className="modal-orderlink">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  role="presentation"
                  alt=""
                  data-testid="GiftIcon"
                  size="18"
                  color="currentColor"
                >
                  <g fill="currentColor">
                    <path d="M12.151 13.21c.204 0 .406-.035.599-.1.73-.171 1.2-.882 1.073-1.621a1.25 1.25 0 0 0-1.236-.739c-.203 0-.406.035-.598.1a1.417 1.417 0 0 0-1.073 1.621c.214.483.709.779 1.235.739zm-4.561 0a1.247 1.247 0 0 0 1.235-.739 1.414 1.414 0 0 0-1.073-1.62 1.84 1.84 0 0 0-.598-.1 1.247 1.247 0 0 0-1.235.738 1.415 1.415 0 0 0 1.073 1.62c.192.066.394.1.598.1z"></path>
                    <path d="M0 8.533v4.8h4.897c-.5-.664-.65-1.53-.4-2.324A2.724 2.724 0 0 1 7.154 9.25 3.257 3.257 0 0 1 9 9.817V5.333H3.2a3.197 3.197 0 0 0-3.2 3.2zm28.8-3.2H11v4.318a3.336 3.336 0 0 1 1.587-.401 2.724 2.724 0 0 1 2.657 1.76c.25.793.1 1.659-.4 2.323H32v-4.8a3.2 3.2 0 0 0-3.2-3.2zM14.52 16.908a.75.75 0 1 1-.91 1.192L11 16.106v10.56h17.8a3.196 3.196 0 0 0 3.2-3.199v-8.134H12.46l2.06 1.575zm-8.843 1.346a.749.749 0 0 1-.456-1.346l2.061-1.575H0v8.134a3.2 3.2 0 0 0 3.2 3.2H9V15.908L6.131 18.1c-.13.1-.29.154-.454.154z"></path>
                  </g>
                </svg>
                <span>Redeem code</span>
              </a>
              <a href="" className="modal-orderlink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="18"
                  role="presentation"
                  alt=""
                  data-testid="GearIcon"
                  size="18"
                  color="currentColor"
                >
                  <path
                    d="M30.6 13.1h-2.4c-.3-1.4-.8-2.6-1.5-3.8l1.7-1.7c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0l-1.7 1.7c-1.2-.7-2.4-1.3-3.8-1.5V1.4c0-.7-.6-1.4-1.4-1.4h-3c-.7 0-1.4.6-1.4 1.4v2.4c-1.4.4-2.6.8-3.8 1.5L7.6 3.6c-.5-.5-1.4-.5-1.9 0L3.6 5.7c-.6.5-.6 1.4 0 1.9l1.7 1.7c-.7 1.2-1.3 2.4-1.5 3.8H1.3c-.7 0-1.4.6-1.4 1.4v3c0 .7.6 1.4 1.4 1.4h2.4c.3 1.4.8 2.6 1.5 3.8l-1.7 1.7c-.5.5-.5 1.4 0 1.9l2.1 2.1c.6.5 1.4.5 2 0l1.7-1.7c1.2.7 2.4 1.3 3.8 1.5v2.5c0 .7.6 1.4 1.4 1.4h3c.7 0 1.4-.6 1.4-1.4v-2.4c1.4-.3 2.6-.8 3.8-1.5l1.7 1.7c.5.5 1.4.5 1.9 0l2.1-2.1c.5-.5.5-1.4 0-1.9l-1.7-1.7c.7-1.2 1.3-2.4 1.5-3.8h2.4c.7 0 1.4-.6 1.4-1.4v-3c.1-.9-.6-1.5-1.4-1.5zM16 21.6c-3.1 0-5.6-2.5-5.6-5.6 0-3.1 2.5-5.6 5.6-5.6 3.1 0 5.6 2.5 5.6 5.6-.1 3.1-2.6 5.6-5.6 5.6z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Account settings</span>
              </a>
            </div>
          </div>
        </div>

        <div className="modal-footer"></div>
      </div>
    </div>
  );
};
export default Modal;
