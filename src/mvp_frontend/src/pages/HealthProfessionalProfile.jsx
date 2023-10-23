import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardBarProfessional from "../components/DashboardBarProfessional";
import Footer from "../components/Footer";
import "./HealthProfessionalProfile.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthProfessionalProfile = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //

  //State Values
  const [professionalProfile, setProfessionalProfile] = useState({
    username: "Username",
    name: "Name",
    dateofbirth: "1990-01-01",
    city: "District",
    state: "State",
    country: "Country",
    pincode: 0,
    height: 0,
    weight: 0,
    gender: "",
    bloodtype: "",
    occupation: "Occupation",
    certificationID: "Certification ID",
    company: "Company",
  });

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

  const getProfessional = async () => {
    const value = await mvp_backend.readProfessional();

    let tempdate = new Date(Number(value.ok.DOB));
    tempdate =
      tempdate.getFullYear() +
      "-" +
      String(tempdate.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(tempdate.getDate()).padStart(2, "0");
    const tempProfessionalProfile = {
      dateofbirth: tempdate,
      username: value.ok.Username,
      name: value.ok.Name,
      city: value.ok.District,
      state: value.ok.State,
      country: value.ok.Country,
      pincode: Number(value.ok.Pincode),
      height: value.ok.Height,
      weight: value.ok.Weight,
      gender: Object.keys(value.ok.Gender)[0],
      bloodtype: Object.keys(value.ok.BloodType)[0],
      occupation: value.ok.Occupation,
      certificationID: value.ok.CertificationID,
      company: value.ok.Company,
    };
    setProfessionalProfile(tempProfessionalProfile);
  };

  const handleChange = (event) => {
    setProfessionalProfile((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const UpdateProfile = async (event) => {
    event.preventDefault();
    let dobirth = new Date(professionalProfile.dateofbirth);
    dobirth = dobirth.getTime();
    const value = await mvp_backend.updateProfessional({
      Username: professionalProfile.username,
      Name: professionalProfile.name,
      DOB: dobirth,
      Country: professionalProfile.country,
      State: professionalProfile.state,
      District: professionalProfile.city,
      Pincode: Number(professionalProfile.pincode),
      Gender: { [professionalProfile.gender]: null },
      BloodType: { [professionalProfile.bloodtype]: null },
      Height: Number(professionalProfile.height),
      Weight: Number(professionalProfile.weight),
      Occupation: professionalProfile.occupation,
      CertificationID: professionalProfile.certificationID,
      Company: professionalProfile.company,
    });
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
  };

  useEffect(() => {
    getProfessional();
  }, []);

  return (
    <div className="healthprofessionalprofile">
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
      <section className="professionalprofileeditsection">
        <h1 className="edit-professional-profile">Edit Professional Profile</h1>
        <form className="form2">
          <div className="formpart11">
            <div className="input-field-base16">
              <label className="date-of-birth">Username</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={professionalProfile.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">Name</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={professionalProfile.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">Occupation</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="Occupation"
                  type="text"
                  name="occupation"
                  value={professionalProfile.occupation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">Date of Birth</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  type="date"
                  name="dateofbirth"
                  value={professionalProfile.dateofbirth}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">Country</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="Country"
                  type="text"
                  name="country"
                  value={professionalProfile.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">State</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="State"
                  type="text"
                  name="state"
                  value={professionalProfile.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">City</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="City"
                  type="text"
                  name="city"
                  value={professionalProfile.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="formpart11">
            <div className="input-field-base16">
              <label className="date-of-birth">Pincode</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="Pincode"
                  type="number"
                  name="pincode"
                  value={professionalProfile.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">Gender</label>
              <select
                className="inputfield24"
                name="gender"
                value={professionalProfile.gender}
                onChange={handleChange}
                required
              >
                <option value="">None</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">Blood Type</label>
              <select
                className="inputfield24"
                value={professionalProfile.bloodtype}
                name="bloodtype"
                onChange={handleChange}
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
            <div className="input-field-base16">
              <label className="date-of-birth">Height</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="Height in cm"
                  type="number"
                  name="height"
                  value={professionalProfile.height}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">Weight</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="Weight in Kg"
                  type="number"
                  name="weight"
                  value={professionalProfile.weight}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">Certification ID</label>
              <div className="inputfield16">
                <input
                  className="dob"
                  placeholder="Certification ID"
                  type="text"
                  name="certificationID"
                  value={professionalProfile.certificationID}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base16">
              <label className="date-of-birth">Company</label>
              <div className="inputfield16">
                <input
                  className="company1"
                  placeholder="Company"
                  type="text"
                  name="company"
                  value={professionalProfile.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <button
          className="updatebutton1"
          onClick={UpdateProfile}
        >
          <div className="update2">Update</div>
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

export default HealthProfessionalProfile;
