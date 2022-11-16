import React from "react";
import "./bottombar.css";

const Bottombar = () => {
  return (
    <div className="bottombar">
      <div className="bottombarItem">
        <span className="bottombarTitle">ABOUT ME</span>
        <img src="/assets/images/author.jpg" alt="" />
        <p>
          Welcome to readers, I'm pleased to have your presence on this blog
          website. I'm a college student and freelance content writer
          experiencing and exploring my creative space and sharing my opinions
          and writings via a website
        </p>
      </div>
    </div>
  );
};

export default Bottombar;
