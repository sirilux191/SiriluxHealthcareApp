import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardBar from "../components/DashboardBar";
import Footer from "../components/Footer";
import "./HealthUserProfile.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthUserProfile = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //

  //State Values
  const [userprofile, setUserprofile] = useState({
    dateofbirth: "1990-01-01",
    username: "username",
    name: "name",
    city: "district",
    state: "state",
    country: "country",
    pincode: 0,
    height: 0,
    weight: 0,
    gender: "",
    bloodtype: "",
  });
  //
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

  const getUser = async () => {
    const value = await mvp_backend.readUser();

    let tempdate = new Date(Number(value.ok.DOB));

    tempdate =
      tempdate.getFullYear() +
      "-" +
      String(tempdate.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(tempdate.getDate()).padStart(2, "0");
    const tempuserprofile = {
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
    };
    setUserprofile(tempuserprofile);
  };

  const handleChange = (event) => {
    setUserprofile((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const UpdateProfile = async (event) => {
    event.preventDefault();
    let dobirth = new Date(userprofile.dateofbirth);
    dobirth = dobirth.getTime();
    const value = await mvp_backend.updateUser({
      Username: userprofile.username,
      Name: userprofile.name,
      DOB: dobirth,
      Country: userprofile.country,
      State: userprofile.state,
      District: userprofile.city,
      Pincode: Number(userprofile.pincode),
      Gender: { [userprofile.gender]: null },
      BloodType: { [userprofile.bloodtype]: null },
      Height: Number(userprofile.height),
      Weight: Number(userprofile.weight),
    });
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="healthuserprofile">
      <DashboardBar
        imageSize="/solidicon31.svg"
        imageSizeCode="/solidicon32.svg"
        imageCode="/solidicon39.svg"
        imageCode2="/solidicon40.svg"
        imageCodeUrl="/solidicon22.svg"
        imageCodeUrl2="/solidicon35.svg"
        imageCodeUrl3="/solidicon24.svg"
        imageCodeUrl4="/solidicon41.svg"
        imageCodeUrl5="/solidicon42.svg"
        imageCode3="/solidicon43.svg"
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
      <section className="editprofilesection">
        <h1 className="edit-profile">Edit Profile</h1>
        <form className="editprofileform">
          <div className="formpart14">
            <div className="inputfield110">
              <label className="username10">Username</label>
              <div className="inputfield54">
                <input
                  className="username11"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={userprofile.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="inputfield110">
              <label className="username10">Name</label>
              <div className="inputfield54">
                <input
                  className="username11"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={userprofile.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="inputfield110">
              <label className="username10">Date of Birth</label>
              <div className="inputfield54">
                <input
                  className="username11"
                  type="date"
                  name="dateofbirth"
                  value={userprofile.dateofbirth}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="inputfield110">
              <label className="username10">Country</label>
              <div className="inputfield54">
                <input
                  className="username11"
                  placeholder="Country"
                  type="text"
                  name="country"
                  value={userprofile.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="inputfield110">
              <label className="username10">State</label>
              <div className="inputfield54">
                <input
                  className="username11"
                  placeholder="State"
                  type="text"
                  name="state"
                  value={userprofile.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="inputfield110">
              <label className="username10">City</label>
              <div className="inputfield54">
                <input
                  className="username11"
                  placeholder="City"
                  type="text"
                  name="city"
                  value={userprofile.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="formpart14">
            <div className="inputfield110">
              <label className="username10">Pincode</label>
              <div className="inputfield54">
                <input
                  className="username11"
                  placeholder="Pincode"
                  type="number"
                  name="pincode"
                  value={userprofile.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="inputfield110">
              <label className="username10">Gender</label>
              <select
                value={userprofile.gender}
                className="inputfield63"
                name="gender"
                onChange={handleChange}
                required
              >
                <option value="">None</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="inputfield110">
              <label className="username10">Blood Type</label>
              <select
                value={userprofile.bloodtype}
                className="inputfield63"
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
            <div className="inputfield110">
              <label className="username10">Height</label>
              <div className="inputfield54">
                <input
                  className="username11"
                  placeholder="Height in cm"
                  type="number"
                  name="height"
                  value={userprofile.height}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="inputfield110">
              <label className="username10">Weight</label>
              <div className="inputfield54">
                <input
                  className="username11"
                  placeholder="Weight in Kg"
                  type="number"
                  name="weight"
                  value={userprofile.weight}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <button
          onClick={UpdateProfile}
          className="updatebutton2"
        >
          <div className="update3">Update</div>
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

export default HealthUserProfile;
