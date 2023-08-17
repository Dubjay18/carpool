import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./DriversPage.css"
import { storeData } from '../../utils/api.storage';
import StorageConstants from '../../utils/constants.storage';
import axiosInstance, { logAxiosResponse } from '../../utils/request';


const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const handleForgotPassword = async (event) => {
    event.preventDefault()
    try {
      const response = await axiosInstance.post(
        "/auth/forgot-password",
        {
          email,
        }
      )
      // forgot-password req successful, proceed
      alert(JSON.stringify(response.data.msg))
      storeData(StorageConstants.Email, email)
      navigate(
        `/change-password/${email}`,
      )
    } catch (error) {
      logAxiosResponse(error)
    }
  }
  return (
    <div>
      {/* //       <div className='NavTop'>
//         <div className='iconEllipse'>
//           <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
//         </div>
//       </div>= */}
      {/* <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      </div> */}
      <Header title={""} />

      <div className='FormPage'>
        <h3 className='ForgottenPasswordText'><b>Forgotten Password</b></h3>
        <p className='ForgottenPasswordSubText'>Don't worry it occurs. Please enter the email linked with your account</p>
        <div className='PersonalForm'>
          <form onSubmit={handleForgotPassword}>
            <div className='InputFields' style={{ marginBottom: '0px' }}>
              <label className='LabelNames' for="DriversLicense">Enter your email</label>
              <input className='Fields' onChange={(e) => setEmail(e.target.value)} value={email}
                type="email" name="email" id="PhoneNO" />
            </div>
            <input className='SignUpBtn' type="submit" value="Send Code" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword