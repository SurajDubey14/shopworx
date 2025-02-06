import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Graph from "./pages/Graphs/Graph";
import Dashboard from "./pages/Dashboard/Dashboard";
import Provision from "./pages/Provision/Provision";
import User from "./pages/Users/User";
import Report from "./pages/Report/Report";
import Application from "./pages/Apps/Application";
 import ViewPlan from "./pages/ViewPlan/ViewPlan"
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
          
          <Route path="/graphs" element={<Graph />} />{" "}<Route path="/view" element={<ViewPlan/>} />{" "}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
