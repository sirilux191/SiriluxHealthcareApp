import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardBar from "../components/DashboardBar";
import Footer from "../components/Footer";
import "./HealthUserDashboard.css";

const HealthUserDashboard = () => {
  const navigate = useNavigate();

  const onDashboardSectionClick = useCallback(() => {
    navigate("/healthuserdashboard");
  }, [navigate]);

  const onProfileSectionClick = useCallback(() => {
    navigate("/healthuserprofile");
  }, [navigate]);

  const onConsultDoctorSectionClick = useCallback(() => {
    navigate("/healthuserconsultdoctor");
  }, [navigate]);

  const onPurchaseServiceSectionClick = useCallback(() => {
    navigate("/healthuserpurchase");
  }, [navigate]);

  const onSignOutSectionClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onDashboardIconSectionClick = useCallback(() => {
    navigate("/healthuserdashboard");
  }, [navigate]);

  const onProfileIconSectionClick = useCallback(() => {
    navigate("/healthuserprofile");
  }, [navigate]);

  const onConsultDoctorIconSectionClick = useCallback(() => {
    navigate("/healthuserconsultdoctor");
  }, [navigate]);

  const onPurchaseServiceIconSectionClick = useCallback(() => {
    navigate("/healthuserpurchase");
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
    <div className="healthuserdashboard">
      <DashboardBar
        imageSize="/solidicon31.svg"
        imageSizeCode="/solidicon32.svg"
        imageCode="/solidicon33.svg"
        imageCode2="/solidicon11.svg"
        imageCodeUrl="/solidicon34.svg"
        imageCodeUrl2="/solidicon35.svg"
        imageCodeUrl3="/solidicon24.svg"
        imageCodeUrl4="/solidicon36.svg"
        imageCodeUrl5="/solidicon37.svg"
        imageCode3="/solidicon38.svg"
        onFrameButtonClick={onDashboardSectionClick}
        onFrameButton1Click={onProfileSectionClick}
        onFrameButton2Click={onConsultDoctorSectionClick}
        onFrameButton3Click={onPurchaseServiceSectionClick}
        onFrameButton4Click={onSignOutSectionClick}
        onFrameButton5Click={onDashboardIconSectionClick}
        onFrameButton6Click={onProfileIconSectionClick}
        onFrameButton7Click={onConsultDoctorIconSectionClick}
        onFrameButton8Click={onPurchaseServiceIconSectionClick}
        onFrameButton9Click={onSignOutIconSectionClick}
      />
      <section className="feature-section3">
        <div className="taglinesection3">
          <h1 className="things-you-can2">Things you can do</h1>
          <p className="we-provide-you3">{`We provide you healthcare services with best professionals & providers in the world.`}</p>
        </div>
        <div className="featureslist3">
          <div className="feature110">
            <img
              className="globalhealthidicon3"
              alt=""
              src="/icbaselinerocket.svg"
            />
            <div className="featuredescription12">
              <div className="feature-13">Feature 1</div>
              <div className="manage-your-global2">
                Manage your global health ID, update data, share, store it
                securly
              </div>
            </div>
          </div>
          <div className="feature23">
            <img
              className="globalhealthidicon3"
              alt=""
              src="/icbaselinerocket4.svg"
            />
            <div className="featuredescription12">
              <div className="feature-13">Feature 2</div>
              <div className="purchase-services-such">
                Search and connect with best healthcare professionals for your
                consultation.
              </div>
            </div>
          </div>
          <div className="feature23">
            <img
              className="healthserviceicon2"
              alt=""
              src="/icbaselinerocket5.svg"
            />
            <div className="featuredescription12">
              <div className="feature-13">Feature 3</div>
              <div className="purchase-services-such">
                Purchase Services such as medicines, lab tests, supplements etc.
              </div>
            </div>
          </div>
          <div className="feature23">
            <img
              className="globalhealthidicon3"
              alt=""
              src="/icbaselinerocket6.svg"
            />
            <div className="featuredescription15">
              <div className="feature-13">Feature 4</div>
              <div className="purchase-services-such">
                Health packages including insurance, supplements packages, etc.
                (coming soon ...)
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

export default HealthUserDashboard;
