import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
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
    <div className="home">
      <Header
        headerAlignSelf="stretch"
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
        onButton2Click={onButton2Click}
        onButton3Click={onButton3Click}
      />
      <section className="feature-section">
        <div className="taglinesection">
          <h1 className="one-stop-solution">
            One Stop Solution for HealthCare
          </h1>
          <p className="we-provide-you">{`We provide you healthcare services with best professionals & providers in the world.`}</p>
        </div>
        <div className="featureslist">
          <div className="feature1">
            <img
              className="globalhealthidicon"
              alt=""
              src="/icbaselinerocket.svg"
            />
            <div className="featuredescription">
              <div className="feature-1">Feature 1</div>
              <div className="global-health-id">
                Global Health ID which only you can access
              </div>
            </div>
          </div>
          <div className="feature2">
            <img
              className="globalhealthidicon"
              alt=""
              src="/icbaselinerocket1.svg"
            />
            <div className="featuredescription">
              <div className="feature-1">Feature 2</div>
              <div className="global-health-id">
                Consult with best professionals around you
              </div>
            </div>
          </div>
          <div className="feature2">
            <img
              className="healthserviceicon"
              alt=""
              src="/icbaselinerocket2.svg"
            />
            <div className="featuredescription">
              <div className="feature-1">Feature 3</div>
              <div className="global-health-id">
                Purchase services from Best facilities nearby you
              </div>
            </div>
          </div>
          <div className="feature2">
            <img
              className="globalhealthidicon"
              alt=""
              src="/icbaselinerocket3.svg"
            />
            <div className="featuredescription">
              <div className="feature-1">Feature 4</div>
              <div className="global-health-id">{`Blockchain Security, Streamlined UX by Internet Identity & ICP`}</div>
            </div>
          </div>
        </div>
      </section>
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

export default Home;
