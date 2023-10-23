import React from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HealthServiceProfile from "./pages/HealthServiceProfile";
import HealthProfessionalOrders from "./pages/HealthProfessionalOrders";
import HealthProfessionalServiceAvali from "./pages/HealthProfessionalServiceAvali";
import HealthProfessionalProfile from "./pages/HealthProfessionalProfile";
import HealthServiceDashboard from "./pages/HealthServiceDashboard";
import HealthProfessionalDashboard from "./pages/HealthProfessionalDashboard";
import HealthServiceRegistration from "./pages/HealthServiceRegistration";
import HealthProfessionalRegistration from "./pages/HealthProfessionalRegistration";
import AdminListforApprovalProf from "./pages/AdminListforApprovalProf";
import HealthUserPurchase from "./pages/HealthUserPurchase";
import HealthUserConsultDoctor from "./pages/HealthUserConsultDoctor";
import HealthUserProfile from "./pages/HealthUserProfile";
import HealthUserDashboard from "./pages/HealthUserDashboard";
import Explore from "./pages/Explore";
import HealthUserRegistration from "./pages/HealthUserRegistration";
import Features from "./pages/Features";
import HealthServiceOrders from "./pages/HealthServiceOrders";
import HealthServiceServiceAvalibilit from "./pages/HealthServiceServiceAvalibilit";
import "./App.css";
//Connect2IC
import { createClient } from "@connect2ic/core";
import { defaultProviders } from "@connect2ic/core/providers";
import {
  ConnectButton,
  ConnectDialog,
  Connect2ICProvider,
} from "@connect2ic/react";
import "./connect2ic.css";
//
import * as mvp_backend from "../../declarations/mvp_backend";
//

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/healthserviceprofile":
        title = "";
        metaDescription = "";
        break;
      case "/healthprofessionalorders":
        title = "";
        metaDescription = "";
        break;
      case "/healthprofessionalserviceavalibility":
        title = "";
        metaDescription = "";
        break;
      case "/healthprofessionalprofile":
        title = "";
        metaDescription = "";
        break;
      case "/healthservicedashboard":
        title = "";
        metaDescription = "";
        break;
      case "/healthprofessionaldashboard":
        title = "";
        metaDescription = "";
        break;
      case "/healthserviceregistration":
        title = "";
        metaDescription = "";
        break;
      case "/healthprofessionalregistration":
        title = "";
        metaDescription = "";
        break;
      case "/adminlistforapprovalprof":
        title = "";
        metaDescription = "";
        break;
      case "/healthuserpurchase":
        title = "";
        metaDescription = "";
        break;
      case "/healthuserconsultdoctor":
        title = "";
        metaDescription = "";
        break;
      case "/healthuserprofile":
        title = "";
        metaDescription = "";
        break;
      case "/healthuserdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/healthuserregistration":
        title = "";
        metaDescription = "";
        break;
      case "/features":
        title = "";
        metaDescription = "";
        break;
      case "/healthserviceorders":
        title = "";
        metaDescription = "";
        break;
      case "/healthserviceserviceavalibility":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
      <div className="auth-section">
        <ConnectButton />
      </div>
      <ConnectDialog />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/healthserviceprofile"
          element={<HealthServiceProfile />}
        />
        <Route
          path="/healthprofessionalorders"
          element={<HealthProfessionalOrders />}
        />
        <Route
          path="/healthprofessionalserviceavalibility"
          element={<HealthProfessionalServiceAvali />}
        />
        <Route
          path="/healthprofessionalprofile"
          element={<HealthProfessionalProfile />}
        />
        <Route
          path="/healthservicedashboard"
          element={<HealthServiceDashboard />}
        />
        <Route
          path="/healthprofessionaldashboard"
          element={<HealthProfessionalDashboard />}
        />
        <Route
          path="/healthserviceregistration"
          element={<HealthServiceRegistration />}
        />
        <Route
          path="/healthprofessionalregistration"
          element={<HealthProfessionalRegistration />}
        />
        <Route
          path="/adminlistforapprovalprof"
          element={<AdminListforApprovalProf />}
        />
        <Route
          path="/healthuserpurchase"
          element={<HealthUserPurchase />}
        />
        <Route
          path="/healthuserconsultdoctor"
          element={<HealthUserConsultDoctor />}
        />
        <Route
          path="/healthuserprofile"
          element={<HealthUserProfile />}
        />
        <Route
          path="/healthuserdashboard"
          element={<HealthUserDashboard />}
        />
        <Route
          path="/explore"
          element={<Explore />}
        />
        <Route
          path="/healthuserregistration"
          element={<HealthUserRegistration />}
        />
        <Route
          path="/features"
          element={<Features />}
        />
        <Route
          path="/healthserviceorders"
          element={<HealthServiceOrders />}
        />
        <Route
          path="/healthserviceserviceavalibility"
          element={<HealthServiceServiceAvalibilit />}
        />
      </Routes>
    </>
  );
}

const client = createClient({
  canisters: {
    mvp_backend,
  },
  providers: defaultProviders,
});

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
);
