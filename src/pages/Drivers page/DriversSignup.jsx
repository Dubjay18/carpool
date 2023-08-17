import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"
import { boolAnyEmptyInList } from '../../utils/validators';
import axiosInstance, { logAxiosResponse } from '../../utils/request';
import Header from '../../components/global/Header/Header';
import { storeData } from '../../utils/api.storage';
import StorageConstants from '../../utils/constants.storage';

// @LightsidEsys the file pickers not working


const DriversLogin = () => {
  const navigate = useNavigate()

  const [signUpState, setSignUpState] = useState({
    email: "",
    city: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const inputOption = {
    onChange: (ev) =>
      setSignUpState({
        ...signUpState,
        [ev.target.name]: ev.target.value,
      }), // could set value from this option?:)
  };

  const validateForm = () => {
    // check if all are defined
    const { password, confirmPassword } = signUpState;

    if (boolAnyEmptyInList(Object.values(signUpState)))
      throw new Error("Please fill all details");
    if (password !== confirmPassword)
      throw new Error("Password not consistent");

    return signUpState;
  };

  const handleDriverRegistration = async (eventObj) => {
    eventObj.preventDefault();
    try {
      // first validate the form data
      const validData = validateForm();
      // form valid, proceed
      const response = await axiosInstance.post(
        "/driver-auth/register",
        {
          city: validData.lastname,
          email: validData.email,
          phone: validData.phone,
          password: validData.password
        }
      )
      // register successful, proceed
      alert(JSON.stringify(response.data.msg))
      storeData(StorageConstants.IsDriver, true)
      storeData(StorageConstants.Email, validData.email)

      navigate(
        `/VerifyPassword/${validData.email}`,
      )

      // navigate(
      //   `/Document/${validData.email}`,
      // )

    } catch (errorRegistering) {
      logAxiosResponse(errorRegistering)
    };
  };

  return (
    <div>

      {/* <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      <h6 className='NavTopText' style={{marginBottom: "0px"}}>Drive with Tag</h6>
      </div> */}
      <Header title={"Drive with Tag"} />


      <div className='FormPage'>
        <h2 className='Hello'>Hello!</h2>
        <p className='SignUpText'>Sign up as a driver below</p>

        <div className='RegistrationInputs'>
          <form onSubmit={handleDriverRegistration}>
            <div className='InputFields'>
              <label className='LabelNames' for="phone">Phone Number</label>
              <input className='Fields' type="tel" {...inputOption} name="phone" id="phone" placeholder="+234" />
            </div>
            <div className='InputFields'>
              <label className='LabelNames' for="email">E-mail</label>
              <input className='Fields' type="email" {...inputOption} id="email" name="email" />
            </div>
            <div className='InputFields'>
              <label className='LabelNames' for="City">City</label>
              <input className='Fields' type="text" name="city" {...inputOption} id="City" />
            </div>
            <div className='InputFields'>
              <label className='LabelNames' for="Password">Password</label>
              <input className='Fields' type="password" {...inputOption}
                name={"password"} id="Password" />
            </div>
            <div className='InputFields'>
              <label className='LabelNames' for="ConfirmPassword">Confirm Password</label>
              <input className='Fields' type="password" {...inputOption}
                name="confirmPassword" id="ConfirmPassword" />
            </div>

            <input className='SignUpBtn' type="submit" value="Sign Up" />

            <div className='PrivacyFooter'>
              <p>By signing up, you accept our <br /> <span><a href="TermsOfService">Terms of Service and Privacy Policy</a></span></p>
            </div>
          </form>


        </div>
      </div>
    </div>
  )
}

export default DriversLogin