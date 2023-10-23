import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Explore.css";

//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const Explore = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //
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

  const onRegisterButton1Click = useCallback(() => {
    navigate("/healthuserregistration");
  }, [navigate]);

  const onRegisterButtonClick = useCallback(() => {
    navigate("/healthprofessionalregistration");
  }, [navigate]);

  const onRegisterButton2Click = useCallback(() => {
    navigate("/healthserviceregistration");
  }, [navigate]);

  const UserLoginFunc = async () => {
    let val = await mvp_backend.readUser();

    Object.keys(val).forEach((key) => {
      if (key == "ok") {
        alert("Sucessfully Logged In");
        navigate("/healthuserdashboard");
      } else {
        alert(val[key]);
      }
    });
  };

  const ProfessionalLoginFunc = async () => {
    let val = await mvp_backend.readProfessional();

    Object.keys(val).forEach((key) => {
      if (key == "ok") {
        alert("Sucessfully Logged In");
        navigate("/healthprofessionaldashboard");
      } else {
        alert(val[key]);
      }
    });
  };

  const FacilityLoginFunc = async () => {
    let val = await mvp_backend.readFacility();

    Object.keys(val).forEach((key) => {
      if (key == "ok") {
        alert("Sucessfully Logged In");
        navigate("/healthservicedashboard");
      } else {
        alert(val[key]);
      }
    });
  };

  return (
    <div className="explore2">
      <Header
        headerAlignSelf="stretch"
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
        onButton2Click={onButton2Click}
        onButton3Click={onButton3Click}
      />
      <div className="getstartedsection">
        <b className="loginregister">
          <span>Login/</span>
          <span className="register">Register</span>
        </b>
        <div className="health-user">
          <img
            className="healthusericon"
            alt=""
            src="/healthusericon.svg"
          />
          <div className="health-user1">Health User</div>
          <div className="buttonsection">
            <button
              className="loginbutton"
              onClick={UserLoginFunc}
            >
              <img
                className="arrowicon"
                alt=""
                src="/arrowicon.svg"
              />
              <div className="log-in">Log In</div>
            </button>
            <button
              className="registerbutton"
              onClick={onRegisterButton1Click}
            >
              <img
                className="arrowicon"
                alt=""
                src="/arrowicon1.svg"
              />
              <div className="register1">Register</div>
            </button>
          </div>
        </div>
        <div className="health-professional">
          <img
            className="healthusericon"
            alt=""
            src="/healthprofessionalcon.svg"
          />
          <div className="health-user1">Health Professional</div>
          <div className="buttonsection1">
            <button
              className="loginbutton"
              onClick={ProfessionalLoginFunc}
            >
              <img
                className="arrowicon"
                alt=""
                src="/arrowicon.svg"
              />
              <div className="log-in">Log In</div>
            </button>
            <button
              className="registerbutton1"
              data-scroll-to="registerButton"
              onClick={onRegisterButtonClick}
            >
              <img
                className="arrowicon"
                alt=""
                src="/arrowicon1.svg"
              />
              <div className="register1">Register</div>
            </button>
          </div>
        </div>
        <div className="health-user">
          <img
            className="healthusericon"
            alt=""
            src="/healthserviceicon.svg"
          />
          <div className="health-user1">Health Service</div>
          <div className="buttonsection">
            <button
              className="loginbutton"
              onClick={FacilityLoginFunc}
            >
              <img
                className="arrowicon"
                alt=""
                src="/arrowicon2.svg"
              />
              <div className="log-in">Log In</div>
            </button>
            <button
              className="registerbutton1"
              onClick={onRegisterButton2Click}
            >
              <img
                className="arrowicon"
                alt=""
                src="/arrowicon3.svg"
              />
              <div className="register1">Register</div>
            </button>
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

export default Explore;
