import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardBarService from "../components/DashboardBarService";
import Footer from "../components/Footer";
import "./HealthServiceDashboard.css";

const HealthServiceDashboard = () => {
  const navigate = useNavigate();

  const onDashboardSectionClick = useCallback(() => {
    navigate("/healthservicedashboard");
  }, [navigate]);

  const onProfileSectionClick = useCallback(() => {
    navigate("/healthserviceprofile");
  }, [navigate]);

  const onServiceAvailabilitySectionClick = useCallback(() => {
    navigate("/healthserviceserviceavalibility");
  }, [navigate]);

  const onOrderListSectionClick = useCallback(() => {
    navigate("/healthserviceorders");
  }, [navigate]);

  const onSignOutSectionClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onDashboardIconSectionClick = useCallback(() => {
    navigate("/healthservicedashboard");
  }, [navigate]);

  const onProfileIconSectionClick = useCallback(() => {
    navigate("/healthserviceprofile");
  }, [navigate]);

  const onServiceAvailabilityIconSectionClick = useCallback(() => {
    navigate("/healthserviceserviceavalibility");
  }, [navigate]);

  const onOrderListIconSectionClick = useCallback(() => {
    navigate("/healthserviceorders");
  }, [navigate]);

  const onSignOutIconSectionClick = useCallback(() => {
    navigate("/explore");
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
    <div className="healthservicedashboard">
      <DashboardBarService
        imageSize="/solidicon13.svg"
        imageSizeLabel="/solidicon14.svg"
        imageSizeCode="/solidicon48.svg"
        imageSizeId="/solidicon3.svg"
        imageSizeCode2="/solidicon45.svg"
        imageCode="/solidicon13.svg"
        imageSizeDimensions="/solidicon14.svg"
        imageCode2="/solidicon48.svg"
        imageCode3="/solidicon49.svg"
        imageCode4="/solidicon45.svg"
        onFrameButtonClick={onDashboardSectionClick}
        onFrameButton1Click={onProfileSectionClick}
        onFrameButton2Click={onServiceAvailabilitySectionClick}
        onFrameButton3Click={onOrderListSectionClick}
        onFrameButton4Click={onSignOutSectionClick}
        onFrameButton5Click={onDashboardIconSectionClick}
        onFrameButton6Click={onProfileIconSectionClick}
        onFrameButton7Click={onServiceAvailabilityIconSectionClick}
        onFrameButton8Click={onOrderListIconSectionClick}
        onFrameButton9Click={onSignOutIconSectionClick}
      />
      <section className="feature-section1">
        <div className="taglinesection1">
          <h1 className="things-you-can">Things you can do</h1>
          <p className="we-provide-you1">{`We provide you healthcare services with best professionals & providers in the world.`}</p>
        </div>
        <div className="featureslist1">
          <div className="feature11">
            <img
              className="healthpackageicon"
              alt=""
              src="/icbaselinerocket.svg"
            />
            <div className="featuredescription4">
              <div className="feature-11">Feature 1</div>
              <div className="manage-your-global">
                Manage your global health ID, update data, share, store it
                securly
              </div>
            </div>
          </div>
          <div className="feature21">
            <img
              className="healthpackageicon"
              alt=""
              src="/icbaselinerocket9.svg"
            />
            <div className="featuredescription4">
              <div className="feature-11">Feature 2</div>
              <div className="manage-list-of">
                Provide healthcare products to your customers, earn money
                remotely
              </div>
            </div>
          </div>
          <div className="feature21">
            <img
              className="healthdataicon"
              alt=""
              src="/icbaselinerocket7.svg"
            />
            <div className="featuredescription4">
              <div className="feature-11">Feature 3</div>
              <div className="manage-list-of">
                Manage list of orders, efficiently manage their data in one
                place, seamless payment experience
              </div>
            </div>
          </div>
          <div className="feature21">
            <img
              className="healthpackageicon"
              alt=""
              src="/icbaselinerocket10.svg"
            />
            <div className="featuredescription7">
              <div className="feature-11">Feature 4</div>
              <div className="manage-list-of">
                Provide their monthly memberships, get recurring customers,
                build customer base in secure manner
              </div>
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

export default HealthServiceDashboard;
