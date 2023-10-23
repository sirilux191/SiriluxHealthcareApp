import React from "react";
import "./DashboardBar.css";

const DashboardBar = ({
  imageSize,
  imageSizeCode,
  imageCode,
  imageCode2,
  imageCodeUrl,
  imageCodeUrl2,
  imageCodeUrl3,
  imageCodeUrl4,
  imageCodeUrl5,
  imageCode3,
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
    <div className="dashboard-bar">
      <nav className="dashboard-bar1">
        <button
          className="dashboardsection"
          onClick={onFrameButtonClick}
        >
          <img
            className="profileicon"
            alt=""
            src={imageSize}
          />
          <div className="dashboard">Dashboard</div>
        </button>
        <button
          className="profilesection"
          onClick={onFrameButton1Click}
        >
          <img
            className="profileicon"
            alt=""
            src={imageSizeCode}
          />
          <div className="dashboard">Profile</div>
        </button>
        <button
          className="profilesection"
          onClick={onFrameButton2Click}
        >
          <img
            className="profileicon"
            alt=""
            src={imageCode}
          />
          <div className="dashboard">Consult Doctor</div>
        </button>
        <button
          className="profilesection"
          onClick={onFrameButton3Click}
        >
          <img
            className="profileicon"
            alt=""
            src={imageCode2}
          />
          <div className="dashboard">Purchase Service</div>
        </button>
        <button
          className="profilesection"
          onClick={onFrameButton4Click}
        >
          <img
            className="profileicon"
            alt=""
            src={imageCodeUrl}
          />
          <div className="dashboard">Sign Out</div>
        </button>
      </nav>
      <div className="dashboard-bar-icon">
        <button
          className="dashboardiconsection"
          onClick={onFrameButton5Click}
        >
          <img
            className="profileicon"
            alt=""
            src={imageCodeUrl2}
          />
        </button>
        <button
          className="profileiconsection"
          onClick={onFrameButton6Click}
        >
          <img
            className="profileicon"
            alt=""
            src={imageCodeUrl3}
          />
        </button>
        <button
          className="consultdoctoriconsection"
          onClick={onFrameButton7Click}
        >
          <img
            className="profileicon"
            alt=""
            src={imageCodeUrl4}
          />
        </button>
        <button
          className="consultdoctoriconsection"
          onClick={onFrameButton8Click}
        >
          <img
            className="profileicon"
            alt=""
            src={imageCodeUrl5}
          />
        </button>
        <button
          className="consultdoctoriconsection"
          onClick={onFrameButton9Click}
        >
          <img
            className="profileicon"
            alt=""
            src={imageCode3}
          />
        </button>
      </div>
    </div>
  );
};

export default DashboardBar;
