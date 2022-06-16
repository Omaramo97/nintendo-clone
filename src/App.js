import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import PopUp from "./PopUp";
import NintenLogo from "./Topmenus/NintenLogo";
import TopNav from "./Topmenus/TopNav";
import Support from "./Topmenus/Support";
import WishList from "./WishList";
import Cart from "./Topmenus/Cart";
import LoginSignup from "./Topmenus/LoginSignup";
import NinButStore from "./Bottommenus/NinButStore";
import Games from "./Bottommenus/Games";
import NintendoSwitch from "./Bottommenus/NintendoSwitch";
import NewsEvents from "./Bottommenus/NewsEvents";
import PlayNintendo from "./Bottommenus/PlayNintendo";
import Advertisement from "./HomePage/Advertisement";
import Preorder from "./HomePage/Preorder";
import Card from "./Card";
import OnlineStore from "./HomePage/OnlineStore";
import Carousel from "./HomePage/Carousel";
import data from "./HomePage/data";
import GamingSystems from "./HomePage/GamingSystems";
import DigitalBestSellers from "./HomePage/DigitalBestSellers";
import News from "./HomePage/News";
import CharacterSelection from "./HomePage/CharacterSelection";
import DigitalNew from "./HomePage/DigitalNew";
import Footer from "./HomePage/Footer";
import SupportPage from "./Support/SupportPage";
import Accounts from "./Accounts/Accounts";
import AccountsReg from "./Accounts/AccountsReg";
import AccountsSignIn from "./Accounts/AccountsSignIn";
import Modal from "./Modal";

<SupportPage />;

const HomePage = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="TopStyles">
        <div className="TopMenus">
          <div className="ManualTopMenus">
            <div className="NintendoHome">
              <a className="LinkNintendo" href="/">
                <NintenLogo />
              </a>
              <TopNav />
            </div>
            <div className="TopRightStyles">
              <Support />
              <WishList />
              <Cart />
              <button className="modal-style" onClick={() => setShow(true)}>
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
                Log in / Sign up
              </button>
              <Modal onClose={() => setShow(false)} show={show} />
            </div>
          </div>
        </div>
        <div className="BottomMenus">
          <div className="BottomStyleMenus">
            <NinButStore />
            <Games />
            <NintendoSwitch />
            <NewsEvents />
            <PlayNintendo />
          </div>
        </div>
      </div>

      <main id="main" className="layout">
        <div className="imgStyles">
          <div className="CustomStyled"></div>
          <Advertisement />
          <Preorder />
        </div>
        <section className="FeaturedStyles">
          <div className="FeaturedTxt">
            <h1 className="FeaturedPresent">Featured</h1>
          </div>
        </section>
      </main>

      <Carousel />

      <div className="Divider">
        <hr className="DividerStyle"></hr>
      </div>
      <OnlineStore />
      <div className="Divider">
        <hr className="DividerStyle"></hr>
      </div>
      <GamingSystems />
      <div className="Divider">
        <hr className="DividerStyle"></hr>
      </div>
      <News />
      <div className="Divider">
        <hr className="DividerStyle"></hr>
      </div>
      <CharacterSelection />
      <div className="Divider">
        <hr className="DividerStyle"></hr>
      </div>
      <DigitalBestSellers />
      <div className="Divider">
        <hr className="DividerStyle"></hr>
      </div>
      <DigitalNew />
      <div className="Divider">
        <hr className="DividerStyle"></hr>
      </div>
      <Footer />
      <div className="Example">
        <button onClick={() => setShow(true)}>Log in / Sign up</button>
        <Modal onClose={() => setShow(false)} show={show} />
      </div>
    </>
  );
};

function App() {
  const [state, setState] = useState(false);

  const togglePop = () => {
    setState({ seen: !state.seen });
  };

  const HomePage = () => {
    return (
      <div>
        <Link to="/">Go to Home Page</Link>
      </div>
    );
  };
}

export { HomePage, SupportPage, Accounts, AccountsReg, AccountsSignIn, App };
