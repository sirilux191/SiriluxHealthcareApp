import React from "react";
import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  footerBoxSizing,
  footerHeight,
  onHomeClick,
  onExploreClick,
  onFeaturesClick,
  onAboutUsClick,
}) => {
  const footerStyle = useMemo(() => {
    return {
      boxSizing: footerBoxSizing,
      height: footerHeight,
    };
  }, [footerBoxSizing, footerHeight]);

  return (
    <footer
      className="footer"
      style={footerStyle}
    >
      <nav className="footer-links">
        <button
          className="home2"
          onClick={onHomeClick}
        >
          Home
        </button>
        <button
          className="home2"
          onClick={onExploreClick}
        >
          Explore
        </button>
        <button
          className="home2"
          onClick={onFeaturesClick}
        >
          Features
        </button>
        <button
          className="home2"
          onClick={onAboutUsClick}
        >
          About Us
        </button>
      </nav>
    </footer>
  );
};

export default Footer;
