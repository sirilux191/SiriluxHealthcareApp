import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HealthProfessionalRegistration.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthProfessionalRegistration = () => {
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
  const RegisterProfessional = async (event) => {
    event.preventDefault();

    const gender1 = event.target.gender.value;
    const bloodtype1 = event.target.bloodtype.value;

    const val = await mvp_backend.createProfessional({
      Username: event.target.username.value,
      Name: event.target.name.value,
      DOB: event.target.dob.valueAsNumber,
      Country: event.target.country.value,
      State: event.target.state.value,
      District: event.target.city.value,
      Pincode: event.target.pincode.valueAsNumber,
      Gender: { [gender1]: null },
      BloodType: { [bloodtype1]: null },
      Height: event.target.height.valueAsNumber,
      Weight: event.target.weight.valueAsNumber,
      Occupation: event.target.occupation.value,
      CertificationID: event.target.certificationid.value,
      Company: event.target.company.value,
    });
    Object.keys(val).forEach((key) => {
      alert(val[key]);
    });
  };
  //

  return (
    <div className="healthprofessionalregistration">
      <Header
        headerAlignSelf="stretch"
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
        onButton2Click={onButton2Click}
        onButton3Click={onButton3Click}
      />
      <section className="professionalregistrationformse">
        <h1 className="register-professional">Register Professional</h1>
        <form
          id="profForm"
          className="form4"
          onSubmit={RegisterProfessional}
        >
          <div className="formpart13">
            <div className="input-field-base40">
              <label className="username6">Username</label>
              <div className="inputfield40">
                <input
                  id="username"
                  className="username7"
                  placeholder="Username"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">Name</label>
              <div className="inputfield40">
                <input
                  id="name"
                  className="username7"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">Occupation</label>
              <div className="inputfield40">
                <input
                  id="occupation"
                  className="username7"
                  placeholder="Occupation"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">Date of Birth</label>
              <div className="inputfield40">
                <input
                  id="dob"
                  className="username7"
                  type="date"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">Country</label>
              <div className="inputfield40">
                <input
                  id="country"
                  className="username7"
                  placeholder="Country"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">State</label>
              <div className="inputfield40">
                <input
                  id="state"
                  className="username7"
                  placeholder="State"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">City</label>
              <div className="inputfield40">
                <input
                  id="city"
                  className="username7"
                  placeholder="City"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className="formpart13">
            <div className="input-field-base40">
              <label className="username6">Pincode</label>
              <div className="inputfield40">
                <input
                  id="pincode"
                  className="username7"
                  placeholder="Pincode"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">Gender</label>
              <select
                id="gender"
                className="inputfield48"
                required
              >
                <option value="">None</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="input-field-base40">
              <label className="username6">Blood Type</label>
              <select
                id="bloodtype"
                className="inputfield48"
                required
              >
                <option value="">None</option>
                <option value="APositive">A Positive</option>
                <option value="ANegative">A Negative</option>
                <option value="BPositive">B Positive</option>
                <option value="BNegative">B Negative</option>
                <option value="OPositive">O Positive</option>
                <option value="ONegative">O Negative</option>
                <option value="ABPositive">AB Positive</option>
                <option value="ABNegative">AB Negative</option>
              </select>
            </div>
            <div className="input-field-base40">
              <label className="username6">Height</label>
              <div className="inputfield40">
                <input
                  id="height"
                  className="username7"
                  placeholder="Height in cm"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">Weight</label>
              <div className="inputfield40">
                <input
                  id="weight"
                  className="username7"
                  placeholder="Weight in Kg"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">Certification ID</label>
              <div className="inputfield40">
                <input
                  id="certificationid"
                  className="username7"
                  placeholder="Certification ID"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="input-field-base40">
              <label className="username6">Company</label>
              <div className="inputfield40">
                <input
                  id="company"
                  className="company3"
                  placeholder="Company"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <button
          type="submit"
          form="profForm"
          className="submitbutton1"
        >
          <div className="submit1">Submit</div>
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

export default HealthProfessionalRegistration;
