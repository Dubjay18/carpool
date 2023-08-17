import React from "react";
import { Route, Routes } from "react-router-dom";
import AvailableDrivers from "../AvailableDrivers";
import Profile from "../Profile";
import Notifications from "../Notifications";
import OngoingRides from "../Rides/Ongoing";
import FindRide from "../Rides/Find";
import Header from "../../../components/global/Header/Header";
import HomeScreen from "./HomeScreen";

function PassengerHome() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route
        path='availableDrivers'
        element={<AvailableDrivers />}
      />
      <Route path='profile' element={<Profile />} />
      <Route
        path='notifications'
        element={<Notifications />}
      />
      <Route
        path='ongoingRides'
        element={<OngoingRides />}
      />
      <Route path='findRide' element={<FindRide />} />
    </Routes>
  );
}

export default PassengerHome;
