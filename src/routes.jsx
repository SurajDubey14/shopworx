import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Graph from "./pages/Graphs/Graph";
import Dashboard from "./pages/Dashboard/Dashboard";
import Provision from "./pages/Provision/Provision.jsx";
import User from "./pages/Users/User";
import Report from "./pages/Report/Report";
import Application from "./pages/Apps/Application";
import ViewPlan from "./pages/ViewPlan/ViewPlan";
import Production from "./pages/Production/Production";
import Downtime from "./pages/Downtime/Downtime";
import Rejection from "./pages/Rejection/Rejection";
import OEE from "./pages/OEE/OEE";
import MachineDashboard from "./pages/MachineDashboard/MachineDashboard.jsx";
import AddRecord from "./components/AddRecord.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Protected layout */}
          <Route path="/" element={<Dashboard />} />{" "}
          <Route path="/application" element={<Application />} />{" "}
          <Route path="/users" element={<User />} />{" "}
          <Route path="/provision" element={<Provision />} />{" "}
          <Route path="/reports" element={<Report />} />{" "}
          <Route path="/graphs" element={<Graph />} />{" "}
          <Route path="/viewplan" element={<ViewPlan />} />{" "}
          <Route path="/production" element={<Production />} />{" "}
          <Route path="/downtime" element={<Downtime />} />{" "}
          <Route path="/rejection" element={<Rejection />} />{" "}
          <Route path="/oee" element={<OEE />} />{" "}
          <Route path="/record" element={<AddRecord />} />{" "}
          <Route path="/machine-dashboard" element={<MachineDashboard />} />{" "}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;