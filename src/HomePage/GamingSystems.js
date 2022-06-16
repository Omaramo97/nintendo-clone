import React from "react";

function GamingSystems() {
  return (
    <div className="Gaming-Systems-Wrapper">
      <h1 className="FeaturedPresent">Gaming Systems</h1>
      <img
        role="presentation"
        alt="Nintendo Switch family"
        class="ImageDisplay"
        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_1200/v1/ncom/en_US/merchandising/Nintendo_Switch_family_wide_TEST-1"
      ></img>
      <section className="PreorderTag">
        <div className="GamingSystems-Text-Btn-Styling">
          <h3>Find the perfect Nintendo Switch system for you.</h3>

          <div className="PreorderButton">
            <a href="" className="PoButton">
              <span>Explore now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default GamingSystems;
