import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import DriversSignup from "./pages/Drivers page/DriversSignup";
import LoginPage from "./pages/Passengers Page/LoginPage";
import SignUpPage from "./pages/Passengers Sign Up Page/SignUp";
import ForgottenPassword from "./pages/ForgottenPassword/ForgottenPassword";
import AboutScreen from "./pages/AboutScreen/AboutScreen";
import NewPass from "./pages/NewPassword/NewPassword";
import PersonalDetails from "./pages/Drivers page/PersonalDetails";
import Document from "./pages/Drivers page/Document";
import IdentityVerification from "./pages/Drivers page/IdentityVerification";
import VehicleVerification from "./pages/Drivers page/VehicleVerification";
import License from "./pages/Drivers page/License";
import Support from "./pages/Drivers page/Support";
import DriversProfile from "./pages/Drivers page/DriversProfile";
import ForgotPassword from "./pages/Drivers page/ForgotPassword";
import VerifyPassword from "./pages/Drivers page/VerifyPassword";
import VerificationInput from "./pages/OTPVerification/OTPVerification";
import EditProfile from "./pages/Drivers page/EditProfile";
import OngoingRide from "./pages/Drivers page/OngoingRide"
import Profile from "./pages/Passengers/Profile";
import PassengerHome from "./pages/Passengers/Home";
import AdminLoginPage from "./pages/Admin/AdminLogin"
import AdminForgottenPassword from "./pages/Admin/AdminForgottenPassword"
import AdminNewpass from "./pages/Admin/AdminNewPassword"
import DrivProfilepage from "./pages/Passengers Page/DrivProfilepage"
import Changepass from "./pages/NewPassword/changepassword";
import ProfilePage from "./pages/Drivers page/ProfilePage";
import RatePassenger from "./pages/Drivers page/RatePassenger";
import RatingDriver from "./pages/Drivers page/RatingDriver";
import AvailableDrivers from "./pages/Passengers/AvailableDrivers";
import Ongoing from "./pages/Passengers Page/OngoingRide";
import OTP from "./pages/OTP/OTP";
import PersonalInfo from "./pages/Drivers page/PersonalInfo";
import VehicleVerificationTWO from "./pages/Drivers page/VehicleVerificationTWO";
import RequestRide from "./pages/Drivers page/RequestRide";
import CurrentRide from "./pages/Passengers Page/CurrentRide";
import DriversRoutePage from "./pages/FindYourRoute/DriversRoutePage";
import PassengersRoutePage from "./pages/FindYourRoute/PassengersRoutePage";
import DriversHomeScreen from "./pages/Drivers page/DriversHomeScreen";


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route
        path='/DriversSignup'
        element={<DriversSignup />}
      />
      <Route path='/Login' element={<LoginPage />} />
      <Route path='/SignUp' element={<SignUpPage />} />
      <Route
        path='/forgotten-password'
        element={<ForgottenPassword />}
      />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/new-password' element={<NewPass />} />
      <Route
        path='/PersonalDetails'
        element={<PersonalDetails />}
      />
      <Route path='/Document/*' element={<Document />} />
      <Route path='/IdentityVerification' element={<IdentityVerification />} />
      <Route path='/VehicleVerification' element={<VehicleVerification />} />
      <Route path='/License' element={<License />} />
      <Route path='/Support' element={<Support />} />
      <Route
        path='/DriversProfile'
        element={<DriversProfile />}
      />
      <Route
        path='/ForgotPassword'
        element={<ForgotPassword />}
      />
      <Route
        path='/VerifyPassword/:email'
        element={<VerifyPassword />}
      />
      <Route
        path='/ProfilePage'
        element={<ProfilePage />}
      />
      {/* <Route
        path='/NewPassword'
        element={<NewPassword />}
      /> */}
      <Route
        path='/EditProfile'
        element={<EditProfile />}
      />
      <Route
        path='/passengers/*'
        element={<PassengerHome />}
      />
      <Route
        path='/AvailableDrivers'
        element={<AvailableDrivers />}
      />
      <Route
        path='/verifycode'
        element={<VerificationInput />}
      />
      <Route
        path='/RatePassenger'
        element={<RatePassenger />}
      />
      <Route
        path='/RatingDriver'
        element={<RatingDriver />}
      />
      <Route path='/OngoingRide' element={<OngoingRide />} />

      {/* //       <Route path='/DriversProfile' element={<DriversProfile />} />
//       <Route path='/ForgotPassword' element={<ForgotPassword />} />
//       <Route path='/VerifyPassword' element={<VerifyPassword />} />
//       <Route path='/ProfilePage' element={<ProfilePage />} />
//       <Route path='/EditProfile' element={<EditProfile />} />
//       <Route path='/passengers/*'element={<PassengerHome />}  />
//       <Route path='/AvailableDrivers' element={<AvailableDrivers />} />
//       <Route path = '/OngoingRide' element={<OngoingRide/>} />
//       <Route path='/verifycode' element={<VerificationInput />} />
//       <Route path='/RatePassenger' element={<RatePassenger />} />
//       <Route path='/RatingDriver' element={<RatingDriver />} /> */}

      <Route path='/Profile' element={<Profile />} />
      <Route
        path='/DriversProfile'
        element={<DriversProfile />}
      />
      <Route
        path='/verifycode'
        element={<VerificationInput />}
      />
      <Route
        path='/ForgotPassword'
        element={<ForgotPassword />}
      />
      <Route
        path='/VerifyPassword'
        element={<VerifyPassword />}
      />

      <Route
        path='/EditProfile'
        element={<EditProfile />}
      />
      <Route
        path='/passengers/*'
        element={<PassengerHome />}
      />

      <Route path="/admin-login" element={<AdminLoginPage/>}/>
      <Route path="/admin-forgottenpassword" element={<AdminForgottenPassword/>}/>
      <Route path="/admin-newpassword" element={<AdminNewpass/>}/>
      <Route path="/ongoing-ride" element={<OngoingRide/>}/>
      <Route path="/Drivprofile-page" element={<DrivProfilepage/>}/>
      <Route path="/change-password" element={<Changepass/>}/>
      <Route path="/Ongoing" element={<Ongoing/>}/>
      <Route path="/OTP" element={<OTP/>}/>
      <Route path="/PersonalInfo" element={<PersonalInfo/>}/>
      <Route path="/VehicleVerificationTWO" element={<VehicleVerificationTWO/>}/>
      <Route path="/CurrentRide" element={<CurrentRide/>}/>
      <Route path="/RequestRide" element={<RequestRide/>}/>
      <Route path="/DriversRoutePage" element={<DriversRoutePage/>}/>
      <Route path="/PassengersRoutePage" element={<PassengersRoutePage/>}/>
      <Route path="/DriversHomeScreen" element={<DriversHomeScreen/>}/>

      {/* blame: @xpanvictor. can make a page later */}
      <Route
        path="*"
        element={<h1>Page not found</h1>}
      />
    </Routes>
  );
}

export default App;
