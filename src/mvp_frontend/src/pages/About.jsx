import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/features");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onFeaturesClick = useCallback(() => {
    navigate("/features");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="about">
      <Header
        headerAlignSelf="stretch"
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
        onButton2Click={onButton2Click}
        onButton3Click={onButton3Click}
      />
      <div className="contentsection">
        <div className="welcomesection">
          <div className="welcome-to-sirilux">Welcome To Sirilux Health</div>
        </div>
        <div className="infocardscontainer">
          <div className="aboutuscard">
            <img
              className="about1image-icon"
              alt=""
              src="/about1image@2x.png"
            />
            <div className="aboutusdetails">
              <div className="aboutusheading">About us</div>
              <div className="aboutusinfo">
                At Sirilux Health, we're dedicated to transforming healthcare.
                Our mission is to make healthcare accessible, secure, and
                personal. With our platform, you're in control, gaining access
                to top-notch care and managing your health effortlessly.
              </div>
            </div>
          </div>
          <div className="small-cards">
            <div className="whychooseuscard">
              <img
                className="about2image-icon"
                alt=""
                src="/about2image@2x.png"
              />
              <div className="whychooseusdetails">
                <div className="welcome-to-sirilux">Why Choose Us</div>
                <div className="aboutusinfo">
                  <p className="security-your-data">
                    Security: Your data is locked with blockchain technology.
                  </p>
                  <p className="security-your-data">
                    Convenience: Access healthcare services anywhere, anytime.
                  </p>
                  <p className="security-your-data">
                    Quality: Connect with top healthcare providers.
                  </p>
                </div>
              </div>
            </div>
            <div className="ourvaluescard">
              <img
                className="about3image-icon"
                alt=""
                src="/about3image@2x.png"
              />
              <div className="ourvaluesdetails">
                <div className="welcome-to-sirilux">Our Values</div>
                <div className="aboutusinfo">
                  Transparency, privacy, and user-centricity guide us.
                </div>
              </div>
            </div>
            <div className="contactuscard">
              <img
                className="about3image-icon"
                alt=""
                src="/about4image@2x.png"
              />
              <div className="ourvaluesdetails">
                <div className="welcome-to-sirilux">Contact Us</div>
                <div className="aboutusinfo">
                  Reach out anytime. We're here to help.
                </div>
                <div className="welcome-to-sirilux">Get Started</div>
                <div className="aboutusinfo">
                  Ready to take control of your healthcare? Sign up now.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        footerBoxSizing="border-box"
        footerHeight="unset"
        onHomeClick={onHomeClick}
        onExploreClick={onExploreClick}
        onFeaturesClick={onFeaturesClick}
        onAboutUsClick={onAboutUsClick}
      />
    </div>
  );
};

export default About;
