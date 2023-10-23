import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardBarService from "../components/DashboardBarService";
import Footer from "../components/Footer";
import "./HealthServiceProfile.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthServiceProfile = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //

  //State Values
  const [serviceProfile, setServiceProfile] = useState({
    username: "Username",
    facilityname: "Facility Name",
    country: "Country",
    state: "State",
    city: "City",
    pincode: 0,
    registrationID: "Registration ID",
    servicename: "Service Name",
    servicedescription: "Service Description",
    servicecategory: "Service Category",
  });
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

  const getService = async () => {
    const value = await mvp_backend.readFacility();

    const tempserviceprofile = {
      username: value.ok.Username,
      facilityname: value.ok.FacilityName,
      city: value.ok.District,
      state: value.ok.State,
      country: value.ok.Country,
      pincode: Number(value.ok.Pincode),
      registrationID: value.ok.RegistrationID,
      servicename: value.ok.Service.name,
      servicedescription: value.ok.Service.description,
      servicecategory: value.ok.Service.category,
    };
    setServiceProfile(tempserviceprofile);
  };
  const handleChange = (event) => {
    setServiceProfile((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const UpdateProfile = async (event) => {
    event.preventDefault();
    const value = await mvp_backend.updateFacility({
      Username: serviceProfile.username,
      FacilityName: serviceProfile.facilityname,
      Country: serviceProfile.country,
      State: serviceProfile.state,
      District: serviceProfile.city,
      Pincode: Number(serviceProfile.pincode),
      RegistrationID: serviceProfile.registrationID,
      Service: {
        name: serviceProfile.servicename,
        description: serviceProfile.servicedescription,
        category: serviceProfile.servicecategory,
      },
    });
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    <div className="healthserviceprofile">
      <DashboardBarService
        imageSize="/solidicon13.svg"
        imageSizeLabel="/solidicon14.svg"
        imageSizeCode="/solidicon15.svg"
        imageSizeId="/solidicon16.svg"
        imageSizeCode2="/solidicon17.svg"
        imageCode="/solidicon13.svg"
        imageSizeDimensions="/solidicon14.svg"
        imageCode2="/solidicon15.svg"
        imageCode3="/solidicon16.svg"
        imageCode4="/solidicon17.svg"
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
      <section className="editserviceprofilesection">
        <h1 className="edit-service-profile">Edit Service Profile</h1>
        <form className="form">
          <div className="formpart1">
            <div className="input-field-base">
              <label className="username">Username</label>
              <div className="inputfield">
                <input
                  className="username1"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={serviceProfile.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base">
              <label className="username">Facility Name</label>
              <div className="inputfield">
                <input
                  className="username1"
                  placeholder="Facility Name"
                  type="text"
                  name="facilityname"
                  value={serviceProfile.facilityname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base">
              <label className="username">Country</label>
              <div className="inputfield">
                <input
                  className="username1"
                  placeholder="Country"
                  type="text"
                  name="country"
                  value={serviceProfile.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base">
              <label className="username">State</label>
              <div className="inputfield">
                <input
                  className="username1"
                  placeholder="State"
                  type="text"
                  name="state"
                  value={serviceProfile.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base">
              <label className="username">City</label>
              <div className="inputfield">
                <input
                  className="username1"
                  placeholder="City"
                  type="text"
                  name="city"
                  value={serviceProfile.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="formpart1">
            <div className="input-field-base">
              <label className="username">Pincode</label>
              <div className="inputfield">
                <input
                  className="username1"
                  placeholder="Pincode"
                  type="number"
                  name="pincode"
                  value={serviceProfile.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base">
              <label className="username">Registration ID</label>
              <div className="inputfield">
                <input
                  className="registration-id1"
                  placeholder="Registration ID"
                  type="text"
                  name="registrationID"
                  value={serviceProfile.registrationID}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base">
              <label className="username">Service Name</label>
              <div className="inputfield">
                <input
                  className="registration-id1"
                  placeholder="Service Name"
                  type="text"
                  name="servicename"
                  value={serviceProfile.servicename}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base">
              <label className="username">Service Description</label>
              <div className="inputfield">
                <input
                  className="registration-id1"
                  placeholder="Service Description"
                  type="text"
                  name="servicedescription"
                  value={serviceProfile.servicedescription}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base">
              <label className="username">Service Category</label>
              <div className="inputfield">
                <input
                  className="registration-id1"
                  placeholder="Service Category"
                  type="text"
                  name="servicecategory"
                  value={serviceProfile.servicecategory}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <button
          onClick={UpdateProfile}
          className="updatebutton"
        >
          <div className="update">Update</div>
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

export default HealthServiceProfile;
