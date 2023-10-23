import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HealthServiceRegistration.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthServiceRegistration = () => {
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

  //
  const RegisterService = async (event) => {
    event.preventDefault();

    const service = {
      name: event.target.servicename.value,
      description: event.target.servicedescription.value,
      category: event.target.servicecategory.value,
    };

    const val = await mvp_backend.createFacility({
      Username: event.target.username.value,
      FacilityName: event.target.facilityname.value,
      Country: event.target.country.value,
      State: event.target.state.value,
      District: event.target.city.value,
      Pincode: event.target.pincode.valueAsNumber,
      RegistrationID: event.target.registrationid.value,
      Service: service,
    });
    Object.keys(val).forEach((key) => {
      alert(val[key]);
    });
  };
  //

  return (
    <div className="healthserviceregistration">
      <Header
        headerAlignSelf="stretch"
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
        onButton2Click={onButton2Click}
        onButton3Click={onButton3Click}
      />
      <section className="registerservicesection">
        <h1 className="register-service">Register Service</h1>
        <form
          id="serviceForm"
          onSubmit={RegisterService}
          className="form3"
        >
          <div className="formpart12">
            <div className="input-field-base30">
              <label className="username4">Username</label>
              <div className="inputfield30">
                <input
                  id="username"
                  className="username5"
                  placeholder="Username"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base30">
              <label className="username4">Facility Name</label>
              <div className="inputfield30">
                <input
                  id="facilityname"
                  className="username5"
                  placeholder="Facility Name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base30">
              <label className="username4">Country</label>
              <div className="inputfield30">
                <input
                  id="country"
                  className="username5"
                  placeholder="Country"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base30">
              <label className="username4">State</label>
              <div className="inputfield30">
                <input
                  id="state"
                  className="username5"
                  placeholder="State"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base30">
              <label className="username4">City</label>
              <div className="inputfield30">
                <input
                  id="city"
                  className="username5"
                  placeholder="City"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className="formpart12">
            <div className="input-field-base30">
              <label className="username4">Pincode</label>
              <div className="inputfield30">
                <input
                  id="pincode"
                  className="username5"
                  placeholder="Pincode"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="input-field-base30">
              <label className="username4">Registration ID</label>
              <div className="inputfield30">
                <input
                  id="registrationid"
                  className="registration-id3"
                  placeholder="Registration ID"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base30">
              <label className="username4">Service Name</label>
              <div className="inputfield30">
                <input
                  id="servicename"
                  className="registration-id3"
                  placeholder="Service Name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base30">
              <label className="username4">Service Description</label>
              <div className="inputfield30">
                <input
                  id="servicedescription"
                  className="registration-id3"
                  placeholder="Service Description"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base30">
              <label className="username4">Service Category</label>
              <div className="inputfield30">
                <input
                  id="servicecategory"
                  className="registration-id3"
                  placeholder="Service Category"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <button
          type="submit"
          form="serviceForm"
          className="submitbutton"
        >
          <div className="submit">Submit</div>
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

export default HealthServiceRegistration;
