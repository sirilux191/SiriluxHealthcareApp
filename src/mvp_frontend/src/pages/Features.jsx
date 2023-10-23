import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Features.css";

const Features = () => {
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
    <div className="features2">
      <Header
        headerAlignSelf="stretch"
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
        onButton2Click={onButton2Click}
        onButton3Click={onButton3Click}
      />
      <div className="featuressection1">
        <div className="feature1card">
          <img
            className="feature1icon"
            alt=""
            src="/feature1icon.svg"
          />
          <div className="feature1info">
            <b className="personal-global-health">Personal Global Health ID</b>
            <div className="your-personalized-global">
              Your personalized Global Health ID gives you the power to securely
              access and manage your health information from anywhere in the
              world. It's your key to a global network of healthcare services.
            </div>
          </div>
        </div>
        <div className="feature2card">
          <img
            className="feature1icon"
            alt=""
            src="/feature2icon.svg"
          />
          <div className="feature1info">
            <b className="personal-global-health">Access to Top Facilities</b>
            <div className="your-personalized-global">
              With our Global Health ID, discover and access top-notch
              healthcare services in your area, whether for medical care,
              wellness, or specialized treatments
            </div>
          </div>
        </div>
        <div className="feature2card">
          <img
            className="feature3icon"
            alt=""
            src="/feature3icon.svg"
          />
          <div className="feature1info">
            <b className="personal-global-health">
              Blockchain-Powered Security
            </b>
            <div className="your-personalized-global">
              Our platform leverages the cutting-edge security of blockchain
              technology to safeguard your health data. Your information is
              stored in a tamper-resistant manner, ensuring the highest level of
              data protection.
            </div>
          </div>
        </div>
        <div className="feature2card">
          <img
            className="feature3icon"
            alt=""
            src="/feature4icon.svg"
          />
          <div className="feature1info">
            <b className="personal-global-health">
              Streamlined User Experience (UX)
            </b>
            <div className="your-personalized-global">
              We prioritize user-friendly design and functionality. Navigating
              our platform is intuitive, making it easy for you to access and
              manage your health records and services seamlessly.
            </div>
          </div>
        </div>
        <div className="feature2card">
          <img
            className="feature3icon"
            alt=""
            src="/feature5icon.svg"
          />
          <div className="feature1info">
            <b className="personal-global-health">
              Internet Identity Integration
            </b>
            <div className="your-personalized-global">
              Our platform seamlessly integrates with your internet identity,
              making it even more convenient to access and manage your health
              information. You can trust that your identity and data are secure.
            </div>
          </div>
        </div>
        <div className="feature2card">
          <img
            className="feature3icon"
            alt=""
            src="/feature6icon.svg"
          />
          <div className="feature1info">
            <b className="personal-global-health">Fully On Chain with ICP</b>
            <div className="your-personalized-global">
              We are fully compatible with Internet Computer Protocol (ICP),
              providing you with a decentralized and secure environment for
              managing your health data and accessing healthcare services.
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

export default Features;
