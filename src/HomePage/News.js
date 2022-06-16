import React from "react";

function News() {
  return (
    <div className="News-Wrapper">
      <h1 className="FeaturedPresent">News</h1>
      <div className="Article-Container">
        <div className="Article">
          <img
            role="presentation"
            alt=""
            className="Article-Image-Display"
            src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_600/v1/ncom/en_US/articles/2022/nintendo-switch-online-expansion-pack-kirby-64-the-crystal-shards-is-now-available/Kirby_-_N64_-_WN"
          ></img>
          <p>5/20/22</p>
          <h2>
            Nintendo Switch Online + Expansion Pack: Kirby 64: The Crystal
            Shards is now available
          </h2>
          <p>
            Hungry for adventure? The mysterious Dark Matter is after a powerful
            crystal, and only Kirby(and you!) can save the Ripple Star
          </p>
        </div>

        <div className="Article2">
          <img
            role="presentation"
            alt=""
            className="Article-Image-Display"
            src="https://bnetproduct-a.akamaihd.net//56/fdf522000ce4ff327f0f85e7cfc5e680-WoW_ProductPage_FreeTrial_Hero_MN01.jpg"
          ></img>
          <p>5/19/22</p>
          <h2>In-game rewards: Week of May 19, 2022</h2>
          <p>
            (Items may vary.) Here's what's coming to the item section this
            week. This collection will be available from 10:00 p.m PT on May
            18,2022 through 10:00 p.m PT on June 8, 2022. Have fun out there
          </p>
        </div>

        <div className="Article-CheckitOut">
          <img
            role="presentation"
            alt=""
            className="CheckitOut-Image"
            src="https://i.ytimg.com/vi/rpDwIMyADEY/maxresdefault.jpg"
          ></img>
          <p>5/27/22</p>
          <h3>Try it for free-even if you've tried it before</h3>
          <span className="Article-SpanTxt">Read More</span>
        </div>

        <div className="Article-CheckitOut">
          <img
            role="presentation"
            alt=""
            className="CheckitOut-Image"
            src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/articles/2022/ask-the-developer-vol-5-nintendo-switch-sports/1920x1080_ATD_NSS"
          ></img>
          <p>5/26/22</p>
          <h3>Ask the Developer Vol. 5, Nintendo Switch Sports - Part 4</h3>
          <span className="Article-SpanTxt">Read More</span>
        </div>

        <div className="Article-CheckitOut">
          <img
            role="presentation"
            alt=""
            className="CheckitOut-Image"
            src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/articles/2022/ask-the-developer-vol-5-nintendo-switch-sports/1920x1080_ATD_NSS"
          ></img>
          <p>5/26/22</p>
          <h3>Ask the Developer Vol. 5, Nintendo Switch Sports-part 1</h3>
          <span className="Article-SpanTxt">Read More</span>
        </div>

        <div className="Article-CheckitOut">
          <img
            role="presentation"
            alt=""
            className="CheckitOut-Image"
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/nes-games-nintendo-switch-online-mega-man-contra.jpg?q=50&fit=contain&w=480&h=240&dpr=1.5"
          ></img>
          <p>5/26/22</p>
          <h3>
            New update! Find out which Super NES and NES games were added for
            Nintendo Switch
          </h3>
          <span className="Article-SpanTxt">Read More</span>
        </div>
      </div>
    </div>
  );
}
export default News;
