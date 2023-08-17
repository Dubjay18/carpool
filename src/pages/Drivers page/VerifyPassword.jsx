import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance, { logAxiosResponse } from '../../utils/request';
import { storeData } from '../../utils/api.storage';
import StorageConstants from '../../utils/constants.storage';

const VerifyPassword = () => {
  const [token, setToken] = useState(Array(4));
  const params = useParams();
  const userEmail = params.email
  const navigate = useNavigate()

  const changeTokenIndex = (e) => {
    const adj_token = [...token]
    adj_token[e.target.name] = e.target.value
    setToken(adj_token)
  }
  const handleVerify = async () => {
    try {
      if (token.some(value => !value))
        throw new Error("Fill the token please")
      if (!userEmail)
        throw new Error("No email found, link broken!")
      // form valid, proceed
      const response = await axiosInstance.post(
        "/auth/password-token",
        {
          email: userEmail,
          token: token.join("")
        }
      )
      // verify successful, proceed
      alert(JSON.stringify(response.data.msg))
      storeData(StorageConstants.Email, userEmail)
      navigate('/Profile')
    } catch (errorVerifying) {
      logAxiosResponse(errorVerifying)
    }
  }

  const handleResendToken = async () => {
    try {
      if (!userEmail)
        throw new Error("No email found, link broken!")
      const response = await axiosInstance.post(
        "/auth/resend-email",
        {
          email: userEmail,
        }
      )

      // token retrieval successful, proceed
      alert(JSON.stringify(response.data.msg))
    } catch (errorRetrievingToken) {
      logAxiosResponse(errorRetrievingToken)
    }
  }

  return (
    <div>
      <div className='NavTop'>
        <div className='iconEllipse'>
          <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
        </div>
      </div>

      <div className='FormPage'>
        <h3 className='ForgottenPasswordText'><b>Verify</b></h3>
        <p className='ForgottenPasswordSubText'>Verification code has been sent to your number</p>
        <div className='VerificationCode'>
          <input className='VerifySlots' onChange={changeTokenIndex} value={token[0]}
            type="number" name="0" id="FN" placeholder='5' />

          <input className='VerifySlots' onChange={changeTokenIndex} value={token[1]}
            type="number" name="1" id="SN" placeholder='8' />

          <input className='VerifySlots' onChange={changeTokenIndex} value={token[2]}
            type="number" name="2" id="TN" placeholder='3' />

          <input className='VerifySlots' onChange={changeTokenIndex} value={token[3]}
            type="number" name="3" id="FTN" placeholder='' />

        </div>
        <div>
          <p className='OTP' onClick={() => handleResendToken()} >Resend OTP?</p>
          <input className='SignUpBtn' onClick={() => handleVerify()} type='button' value="Confirm Code" style={{ marginTop: '3%' }} />
        </div>
      </div>

    </div>
  )
}

export default VerifyPassword