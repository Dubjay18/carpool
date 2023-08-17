import React from "react";
import "../../../bootstrap.min.css";
import Header from "../../../components/global/Header/Header";
import DriverCard from "../../../components/passengers/DriverCard";
import "./AvailableDrivers.css";


function AvailableDrivers() {
  return (
    <div className='main-bg'>
      <Header title='Available Drivers' />
      <DriverCard pending />
      <DriverCard />
      <DriverCard />
      <DriverCard />
      <DriverCard />
    </div>
  );
}

export default AvailableDrivers;
