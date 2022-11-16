import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleLg">Blog</span> */}
      </div>
      <img className="headerImg" src="/assets/images/bg_blog.jpg" alt=" " />
    </div>
  );
};

export default Header;
