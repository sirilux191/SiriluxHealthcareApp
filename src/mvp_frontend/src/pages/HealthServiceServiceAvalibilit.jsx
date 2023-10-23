import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardBarService from "../components/DashboardBarService";
import Footer from "../components/Footer";
import "./HealthServiceServiceAvalibilit.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthServiceServiceAvalibilit = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //

  //State Values
  const [serviceAvailability, setServiceAvailability] = useState({
    servicename: "Service Name",
    servicedescription: "Service Description",
    servicecategory: "Service Category",
    availablequantity: 0,
    unit: "Piece",
    price: 0,
    deliveryTime: 0,
  });
  //
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

  const getInfo = async () => {
    const value = await mvp_backend.readFacilityAvailability();

    Object.keys(value).forEach((key) => {
      if (key == "ok") {
        const tempfetchdata = {
          servicename: value.ok.service.name,
          servicedescription: value.ok.service.description,
          servicecategory: value.ok.service.category,
          availablequantity: Number(value.ok.availableQuantity),
          unit: value.ok.unit,
          price: Number(value.ok.price),
          deliveryTime: Number(value.ok.deliveryTime),
        };
        setServiceAvailability(tempfetchdata);
      } else {
        alert(value[key]);
      }
    });
  };

  const UpdateInfo = async (event) => {
    event.preventDefault();

    const value = await mvp_backend.createFacilityAvailability({
      service: {
        name: serviceAvailability.servicename,
        description: serviceAvailability.servicedescription,
        category: serviceAvailability.servicecategory,
      },
      availableQuantity: Number(serviceAvailability.availablequantity),
      unit: serviceAvailability.unit,
      price: Number(serviceAvailability.price),
      deliveryTime: Number(serviceAvailability.deliveryTime),
    });
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
  };

  const handleChange = (event) => {
    setServiceAvailability((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="healthserviceserviceavaliabili">
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
      <section className="serviceavaliablityform">
        <h1 className="update-service-details">Update Service Details</h1>
        <form className="form6">
          <div className="formpart">
            <div className="input-field-base64">
              <label className="service-name7">Service Name</label>
              <div className="inputfield94">
                <input
                  className="service-name8"
                  placeholder="Service Name"
                  type="text"
                  name="servicename"
                  value={serviceAvailability.servicename}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base64">
              <label className="service-name7">Service Description</label>
              <div className="inputfield94">
                <input
                  className="service-name8"
                  placeholder="Service Description"
                  type="text"
                  name="servicedescription"
                  value={serviceAvailability.servicedescription}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base64">
              <label className="service-name7">Service Category</label>
              <div className="inputfield94">
                <input
                  className="service-name8"
                  placeholder="Service Category"
                  type="text"
                  name="servicecategory"
                  value={serviceAvailability.servicecategory}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base64">
              <label className="service-name7">Available Quantity</label>
              <div className="inputfield94">
                <input
                  className="service-name8"
                  placeholder="Available Quantity"
                  type="number"
                  name="availablequantity"
                  value={serviceAvailability.availablequantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base64">
              <label className="service-name7">Price</label>
              <div className="inputfield94">
                <input
                  className="service-name8"
                  placeholder="Price"
                  type="number"
                  name="price"
                  value={serviceAvailability.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-field-base64">
              <label className="service-name7">Delivery Time In Days</label>
              <div className="inputfield94">
                <input
                  className="service-name8"
                  placeholder="Delivery Time In Days"
                  type="number"
                  name="deliveryTime"
                  value={serviceAvailability.deliveryTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <button
          onClick={UpdateInfo}
          className="button14"
        >
          <div className="update4">Update</div>
        </button>
      </section>
      <Footer
        footerBoxSizing="border-box"
        footerHeight="88px"
        onHomeClick={onHomeClick}
        onExploreClick={onExploreClick}
        onFeaturesClick={onFeaturesClick}
        onAboutUsClick={onAboutUsClick}
      />
    </div>
  );
};

export default HealthServiceServiceAvalibilit;
