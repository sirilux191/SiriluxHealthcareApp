import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardBarProfessional from "../components/DashboardBarProfessional";
import Footer from "../components/Footer";
import "./HealthProfessionalDashboard.css";

const HealthProfessionalDashboard = () => {
  const navigate = useNavigate();

  const onDashboardSectionClick = useCallback(() => {
    navigate("/healthprofessionaldashboard");
  }, [navigate]);

  const onProfileSectionClick = useCallback(() => {
    navigate("/healthprofessionalprofile");
  }, [navigate]);

  const onUpdateAvailabilitySectionClick = useCallback(() => {
    navigate("/healthprofessionalserviceavalibility");
  }, [navigate]);

  const onOrderListSectionClick = useCallback(() => {
    navigate("/healthprofessionalorders");
  }, [navigate]);

  const onSignOutSectionClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onDashboardIconSectionClick = useCallback(() => {
    navigate("/healthprofessionaldashboard");
  }, [navigate]);

  const onProfileIconSectionClick = useCallback(() => {
    navigate("/healthprofessionalprofile");
  }, [navigate]);

  const onUpdateAvailabilityIconSectionClick = useCallback(() => {
    navigate("/healthprofessionalserviceavalibility");
  }, [navigate]);

  const onOrderListIconSectionClick = useCallback(() => {
    navigate("/healthprofessionalorders");
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
    <div className="healthprofessionaldashboard">
      <DashboardBarProfessional
        solidIcon="/solidicon18.svg"
        solidIcon1="/solidicon19.svg"
        solidIcon2="/solidicon46.svg"
        solidIcon3="/solidicon44.svg"
        solidIcon4="/solidicon34.svg"
        solidIcon5="/solidicon23.svg"
        solidIcon6="/solidicon24.svg"
        solidIcon7="/solidicon441.svg"
        solidIcon8="/solidicon49.svg"
        solidIcon9="/solidicon45.svg"
        onFrameButtonClick={onDashboardSectionClick}
        onFrameButton1Click={onProfileSectionClick}
        onFrameButton2Click={onUpdateAvailabilitySectionClick}
        onFrameButton3Click={onOrderListSectionClick}
        onFrameButton4Click={onSignOutSectionClick}
        onFrameButton5Click={onDashboardIconSectionClick}
        onFrameButton6Click={onProfileIconSectionClick}
        onFrameButton7Click={onUpdateAvailabilityIconSectionClick}
        onFrameButton8Click={onOrderListIconSectionClick}
        onFrameButton9Click={onSignOutIconSectionClick}
      />
      <section className="feature-section2">
        <div className="taglinesection2">
          <h1 className="things-you-can1">Things you can do</h1>
          <p className="we-provide-you2">{`We provide you healthcare services with best professionals & providers in the world.`}</p>
        </div>
        <div className="featureslist2">
          <div className="feature12">
            <img
              className="globalhealthidicon2"
              alt=""
              src="/icbaselinerocket.svg"
            />
            <div className="featuredescription8">
              <div className="feature-12">Feature 1</div>
              <div className="manage-your-global1">
                Manage your global health ID, update data, share, store it
                securly
              </div>
            </div>
          </div>
          <div className="feature22">
            <img
              className="globalhealthidicon2"
              alt=""
              src="/icbaselinerocket4.svg"
            />
            <div className="featuredescription8">
              <div className="feature-12">Feature 2</div>
              <div className="provide-consultation-to">
                Provide consultation to your clients, earn money remotely
              </div>
            </div>
          </div>
          <div className="feature22">
            <img
              className="healthdataicon1"
              alt=""
              src="/icbaselinerocket7.svg"
            />
            <div className="featuredescription8">
              <div className="feature-12">Feature 3</div>
              <div className="provide-consultation-to">
                Manage list of patients, efficiently manage their data in one
                place, seamless payment experience
              </div>
            </div>
          </div>
          <div className="feature22">
            <img
              className="globalhealthidicon2"
              alt=""
              src="/icbaselinerocket8.svg"
            />
            <div className="featuredescription11">
              <div className="feature-12">Feature 4</div>
              <div className="provide-consultation-to">
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

export default HealthProfessionalDashboard;
