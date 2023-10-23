import React from "react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavDrawer.css";

const NavDrawer = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onHomeSectionClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreSectionClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onFeaturesSectionClick = useCallback(() => {
    navigate("/features");
  }, [navigate]);

  const onAboutSectionClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div
      className="navdrawer"
      data-animate-on-scroll
    >
      <button
        className="homesection"
        onClick={onHomeSectionClick}
      >
        <img
          className="homeicon"
          alt=""
          src="/solidicon26.svg"
        />
        <div className="explore">Home</div>
      </button>
      <button
        className="exploresection"
        onClick={onExploreSectionClick}
      >
        <img
          className="homeicon"
          alt=""
          src="/solidicon6.svg"
        />
        <div className="explore">Explore</div>
      </button>
      <button
        className="exploresection"
        onClick={onFeaturesSectionClick}
      >
        <img
          className="homeicon"
          alt=""
          src="/solidicon27.svg"
        />
        <div className="explore">Features</div>
      </button>
      <button
        className="exploresection"
        onClick={onAboutSectionClick}
      >
        <img
          className="homeicon"
          alt=""
          src="/solidicon28.svg"
        />
        <div className="explore">About Us</div>
      </button>
    </div>
  );
};

export default NavDrawer;
