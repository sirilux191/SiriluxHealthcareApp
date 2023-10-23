import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HealthUserRegistration.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthUserRegistration = () => {
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
  const RegisterUser = async (event) => {
    event.preventDefault();

    const gender1 = event.target.gender.value;
    const bloodtype1 = event.target.bloodtype.value;

    const val = await mvp_backend.createUser({
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
    });
    Object.keys(val).forEach((key) => {
      alert(val[key]);
    });
  };
  //

  return (
    <div className="healthuserregistration">
      <Header
        headerAlignSelf="stretch"
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
        onButton2Click={onButton2Click}
        onButton3Click={onButton3Click}
      />
      <section className="userregistrationformsection">
        <h1 className="register-user">Register User</h1>
        <form
          id="formA"
          className="form5"
          onSubmit={RegisterUser}
        >
          <div className="formpart15">
            <div className="inputfield112">
              <label className="username12">Username</label>
              <div className="inputfield67">
                <input
                  id="username"
                  className="username13"
                  placeholder="Username"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="inputfield112">
              <label className="username12">Name</label>
              <div className="inputfield67">
                <input
                  id="name"
                  className="username13"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="inputfield112">
              <label className="username12">Date of Birth</label>
              <div className="inputfield67">
                <input
                  id="dob"
                  className="username13"
                  type="date"
                  required
                />
              </div>
            </div>
            <div className="inputfield112">
              <label className="username12">Country</label>
              <div className="inputfield67">
                <input
                  id="country"
                  className="username13"
                  placeholder="Country"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="inputfield112">
              <label className="username12">State</label>
              <div className="inputfield67">
                <input
                  id="state"
                  className="username13"
                  placeholder="State"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="inputfield112">
              <label className="username12">City</label>
              <div className="inputfield67">
                <input
                  id="city"
                  className="username13"
                  placeholder="City"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className="formpart15">
            <div className="inputfield112">
              <label className="username12">Pincode</label>
              <div className="inputfield67">
                <input
                  id="pincode"
                  className="username13"
                  placeholder="Pincode"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="inputfield112">
              <label className="username12">Gender</label>
              <select
                id="gender"
                className="inputfield76"
                required
              >
                <option value="">None</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="inputfield112">
              <label className="username12">Blood Type</label>
              <select
                id="bloodtype"
                className="inputfield76"
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
            <div className="inputfield112">
              <label className="username12">Height</label>
              <div className="inputfield67">
                <input
                  id="height"
                  className="username13"
                  placeholder="Height in cm"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="inputfield112">
              <label className="username12">Weight</label>
              <div className="inputfield67">
                <input
                  id="weight"
                  className="username13"
                  placeholder="Weight in Kg"
                  type="number"
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <button
          form="formA"
          className="submitbutton2"
          type="submit"
        >
          <div className="submit2">Submit</div>
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

export default HealthUserRegistration;
