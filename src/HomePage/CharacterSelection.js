import React from "react";

export default function CharacterSelection() {
  return (
    <div className="Character-Wrapper">
      <h1 className="Character-Title">Characters</h1>
      <div className="Character-Container">
        <div className="Character-Display">
          <img
            role="presentation"
            alt=""
            className="Character-Image1"
            src="https://mario.wiki.gallery/images/3/3e/MPSS_Mario.png"
          ></img>
          <h3>Super Mario</h3>
        </div>
        <div className="Character-Display">
          <img
            role="presentation"
            alt=""
            className="Character-Image2"
            src="https://ssb.wiki.gallery/images/0/00/Link_BotW.png" /**https://animal-crossing.com/assets/img/home/isabelle.png */
          ></img>
          <h3>The Legend of Zelda</h3>
        </div>
        <div className="Character-Display">
          <img
            role="presentation"
            alt=""
            className="Character-Image3"
            src="https://animal-crossing.com/assets/img/home/isabelle.png "
          ></img>
          <h3>Animal Crossing</h3>
        </div>
        <div className="Character-Display">
          <img
            role="presentation"
            alt=""
            className="Character-Image4"
            src="https://ssb.wiki.gallery/images/thumb/b/bb/Kirby_KATFL.png/1200px-Kirby_KATFL.png"
          ></img>
          <h3>Kirby</h3>
        </div>
      </div>
    </div>
  );
}
