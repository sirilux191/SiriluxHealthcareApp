import React from "react";
import "./DashboardBarProfessional.css";

const DashboardBarProfessional = ({
  solidIcon,
  solidIcon1,
  solidIcon2,
  solidIcon3,
  solidIcon4,
  solidIcon5,
  solidIcon6,
  solidIcon7,
  solidIcon8,
  solidIcon9,
  onFrameButtonClick,
  onFrameButton1Click,
  onFrameButton2Click,
  onFrameButton3Click,
  onFrameButton4Click,
  onFrameButton5Click,
  onFrameButton6Click,
  onFrameButton7Click,
  onFrameButton8Click,
  onFrameButton9Click,
}) => {
  return (
    <div className="dashboard-bar-professional">
      <nav className="dashboard-bar-professional1">
        <button
          className="dashboardsection6"
          onClick={onFrameButtonClick}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon}
          />
          <div className="update-availablity">Dashboard</div>
        </button>
        <button
          className="updateavailabilitysection"
          onClick={onFrameButton1Click}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon1}
          />
          <div className="update-availablity">Profile</div>
        </button>
        <button
          className="updateavailabilitysection"
          onClick={onFrameButton2Click}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon2}
          />
          <div className="update-availablity">Update Availability</div>
        </button>
        <button
          className="updateavailabilitysection"
          onClick={onFrameButton3Click}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon3}
          />
          <div className="update-availablity">Order List</div>
        </button>
        <button
          className="updateavailabilitysection"
          onClick={onFrameButton4Click}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon4}
          />
          <div className="update-availablity">Sign Out</div>
        </button>
      </nav>
      <nav className="dashboard-bar-icon-professiona">
        <button
          className="dashboardiconsection6"
          onClick={onFrameButton5Click}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon5}
          />
        </button>
        <button
          className="profileiconsection6"
          onClick={onFrameButton6Click}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon6}
          />
        </button>
        <button
          className="updateavailabilityiconsection"
          onClick={onFrameButton7Click}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon7}
          />
        </button>
        <button
          className="updateavailabilityiconsection"
          onClick={onFrameButton8Click}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon8}
          />
        </button>
        <button
          className="updateavailabilityiconsection"
          onClick={onFrameButton9Click}
        >
          <img
            className="updateicon"
            alt=""
            src={solidIcon9}
          />
        </button>
      </nav>
    </div>
  );
};

export default DashboardBarProfessional;
