import React from "react";
import Timeline from "./Timeline";
import Slider from "./Slider";
import MealPlan from "./MealPlan";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Timeline />
      <Slider />
      <MealPlan />
    </div>
  );
};

export default Dashboard;
