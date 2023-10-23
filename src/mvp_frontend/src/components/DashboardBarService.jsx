import React from "react";
import "./DashboardBarService.css";

const DashboardBarService = ({
  imageSize,
  imageSizeLabel,
  imageSizeCode,
  imageSizeId,
  imageSizeCode2,
  imageCode,
  imageSizeDimensions,
  imageCode2,
  imageCode3,
  imageCode4,
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
    <div className="dashboard-bar-service">
      <nav className="dashboard-bar-service1">
        <button
          className="dashboardsection5"
          onClick={onFrameButtonClick}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageSize}
          />
          <div className="service-availablity">Dashboard</div>
        </button>
        <button
          className="serviceavailabilitysection"
          onClick={onFrameButton1Click}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageSizeLabel}
          />
          <div className="service-availablity">Profile</div>
        </button>
        <button
          className="serviceavailabilitysection"
          onClick={onFrameButton2Click}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageSizeCode}
          />
          <div className="service-availablity">Service Availability</div>
        </button>
        <button
          className="serviceavailabilitysection"
          onClick={onFrameButton3Click}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageSizeId}
          />
          <div className="service-availablity">Order List</div>
        </button>
        <button
          className="serviceavailabilitysection"
          onClick={onFrameButton4Click}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageSizeCode2}
          />
          <div className="service-availablity">Sign Out</div>
        </button>
      </nav>
      <nav className="dashboard-bar-icon-service">
        <button
          className="dashboardiconsection5"
          onClick={onFrameButton5Click}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageCode}
          />
        </button>
        <button
          className="profileiconsection5"
          onClick={onFrameButton6Click}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageSizeDimensions}
          />
        </button>
        <button
          className="serviceavailabilityiconsection"
          onClick={onFrameButton7Click}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageCode2}
          />
        </button>
        <button
          className="serviceavailabilityiconsection"
          onClick={onFrameButton8Click}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageCode3}
          />
        </button>
        <button
          className="serviceavailabilityiconsection"
          onClick={onFrameButton9Click}
        >
          <img
            className="dashboardicon"
            alt=""
            src={imageCode4}
          />
        </button>
      </nav>
    </div>
  );
};

export default DashboardBarService;
