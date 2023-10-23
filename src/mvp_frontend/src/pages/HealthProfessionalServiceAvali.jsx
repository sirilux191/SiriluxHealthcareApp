import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardBarProfessional from "../components/DashboardBarProfessional";
import Footer from "../components/Footer";
import "./HealthProfessionalServiceAvali.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthProfessionalServiceAvali = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //

  //State Values
  const [professionalAvailability, setProfessionalAvailability] = useState({
    name: "Name",
    occupation: "Occupation",
    description: "Description",
    startTime: "1990-01-01T00:00",
    endTime: "1990-01-01T00:00",
    charge: 0,
  });
  //
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

  const getInfo = async () => {
    const value = await mvp_backend.readProfessionalAvailability();

    Object.keys(value).forEach((key) => {
      if (key == "ok") {
        let tempStartdate = new Date(Number(value.ok.startTime));
        let tempEnddate = new Date(Number(value.ok.endTime));

        tempStartdate =
          tempStartdate.getFullYear() +
          "-" +
          String(tempStartdate.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(tempStartdate.getDate()).padStart(2, "0") +
          "T" +
          String(tempStartdate.getHours()).padStart(2, "0") +
          ":" +
          String(tempStartdate.getMinutes()).padStart(2, "0");

        tempEnddate =
          tempEnddate.getFullYear() +
          "-" +
          String(tempEnddate.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(tempEnddate.getDate()).padStart(2, "0") +
          "T" +
          String(tempEnddate.getHours()).padStart(2, "0") +
          ":" +
          String(tempEnddate.getMinutes()).padStart(2, "0");

        const tempfetchdata = {
          name: value.ok.name,
          occupation: value.ok.occupation,
          description: value.ok.description,
          startTime: tempStartdate,
          endTime: tempEnddate,
          charge: Number(value.ok.charge),
        };
        setProfessionalAvailability(tempfetchdata);
      } else {
        alert(value[key]);
      }
    });
  };

  const UpdateInfo = async (event) => {
    event.preventDefault();
    let fillstartTime = new Date(professionalAvailability.startTime);
    let fillendTime = new Date(professionalAvailability.endTime);

    fillstartTime = fillstartTime.getTime();
    fillendTime = fillendTime.getTime();

    const value = await mvp_backend.createProfessionalAvailability({
      name: professionalAvailability.name,
      occupation: professionalAvailability.occupation,
      description: professionalAvailability.description,
      startTime: Number(fillstartTime),
      endTime: Number(fillendTime),
      charge: Number(professionalAvailability.charge),
    });
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
  };

  const handleChange = (event) => {
    setProfessionalAvailability((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="healthprofessionalserviceavali">
      <DashboardBarProfessional
        solidIcon="/solidicon18.svg"
        solidIcon1="/solidicon19.svg"
        solidIcon2="/solidicon20.svg"
        solidIcon3="/solidicon21.svg"
        solidIcon4="/solidicon22.svg"
        solidIcon5="/solidicon23.svg"
        solidIcon6="/solidicon24.svg"
        solidIcon7="/solidicon25.svg"
        solidIcon8="/solidicon16.svg"
        solidIcon9="/solidicon17.svg"
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
      <section className="professionalavailablityform">
        <h1 className="update-your-available">{`Update Your Available Timing `}</h1>
        <form className="form1">
          <div className="input-field-base10">
            <label className="name">Name</label>
            <div className="inputfield10">
              <input
                className="name1"
                placeholder="Name"
                type="text"
                name="name"
                value={professionalAvailability.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-field-base10">
            <label className="name">Occupation</label>
            <div className="inputfield10">
              <input
                className="description"
                placeholder="Occupation"
                type="text"
                name="occupation"
                value={professionalAvailability.occupation}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-field-base10">
            <label className="name">Description</label>
            <div className="inputfield10">
              <input
                className="description"
                placeholder="Description"
                type="text"
                name="description"
                value={professionalAvailability.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-field-base10">
            <label className="name">Start Time</label>
            <div className="inputfield10">
              <input
                className="description"
                placeholder="Start Time"
                type="datetime-local"
                name="startTime"
                value={professionalAvailability.startTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-field-base10">
            <label className="name">End Time</label>
            <div className="inputfield10">
              <input
                className="description"
                placeholder="End Time"
                type="datetime-local"
                name="endTime"
                value={professionalAvailability.endTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-field-base10">
            <label className="name">Charge</label>
            <div className="inputfield10">
              <input
                className="description"
                placeholder="Charge"
                type="number"
                name="charge"
                value={professionalAvailability.charge}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
        <button
          onClick={UpdateInfo}
          className="button9"
        >
          <div className="update1">Update</div>
        </button>
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

export default HealthProfessionalServiceAvali;
