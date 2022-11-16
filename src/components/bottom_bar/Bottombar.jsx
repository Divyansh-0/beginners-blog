import React from "react";
import "./bottombar.css";

const Bottombar = () => {
  return (
    <div className="bottombar">
      <div className="bottombarItem">
        <span className="bottombarTitle">ABOUT ME</span>

        <div className="bottombarItems">
          {" "}
          <p>
            The Revived gen is a group of a few enthusiastic youths who are in
            deep observation and research about how youth in the present day get
            into a dilemma and forget about their ability and capability along
            with losing their genesis
          </p>
          <p>
            We aim to work on mental health management, sharing valuable
            information and knowledge with real-time stories around you via our
            website as well as other social media platforms{" "}
          </p>
        </div>
        <div className="top">
          <div className="topLeft">
            <a href="https://google.com">
              <i className="topIcon fab fa-linkedin-square"></i>
            </a>

            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
