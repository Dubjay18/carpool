import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import "../../bootstrap.min.css"
import "./LoginPage.css"
import NavBar from '../../components/Nav/Nav'
import PasswordInput from "../../components/Password/Password"
// import RememberMeButton from '../../components/RemeberMe/RememberMe';
import axiosInstance, { logAxiosResponse } from '../../utils/request';
import { useNavigate } from 'react-router-dom';
import { storeData } from '../../utils/api.storage';
import StorageConstants from '../../utils/constants.storage';


const LoginPage = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleUserLogin = async (eventObj) => {
        eventObj.preventDefault();
        try {
            const response = await axiosInstance.post(
                "/auth/login",
                {
                    email: loginData.email,
                    password: loginData.password
                }
            )
            // register successful, proceed
            const successResponse = response.data
            alert(successResponse.msg ?? "Login successful")
            storeData(StorageConstants.Email, loginData.email)
            // TODO: store token here
            storeData(StorageConstants.Token, successResponse.token)
            storeData(StorageConstants.UserAuthenticated, true)
            navigate(
                `/passengers`,
            )

        } catch (errorRegistering) {
            const axiosResponse = logAxiosResponse(errorRegistering)
            if (axiosResponse.axiosError && axiosResponse.status == 401)
                navigate(
                    `/VerifyPassword/${loginData.email}`,
                )
        };
    };

    // an input component will be better
    const inputOption = {
        onChange: (ev) =>
            setLoginData({
                ...loginData,
                [ev.target.name]: ev.target.value,
            }), // could set value from this option?:)
    };

    return (
        <div className='Login-page'>
            <NavBar />
            <div className='flex'>
                <img className='CarImage' src="/Assets/car.png" alt="Car Image" />
            </div>
            <div className='FormPage'>
                <div>
                    <p className='text'>Log <span className='text2'>in</span></p>
                </div>
                <div class="google-button-container">
                    <button class="google-button">
                        <img src="/Assets/Google.svg" alt="Google Icon" className='google-icon' />
                        <p className='googletext'>Use a Google Account</p>
                    </button>
                </div>
                <div class="divider-container">
                    <span class="divider-line"></span>
                    <span class="divider-text">or</span>
                    <span class="divider-line"></span>
                </div>
                <div className='RegistrationInputs'>
                    <form onSubmit={handleUserLogin}>
                        <div className='InputFields'>
                            <label for="email" className='labelemail'>E-mail</label>
                            <input className='email' type="email" id="email" {...inputOption} name="email" />
                        </div>

                        <div className='InputFields'>
                            <label for="Password" className='labelpass'>Password</label>
                            <PasswordInput
                                value={loginData["password"]}
                                {...inputOption}
                                name='password'
                            />
                        </div>
                        <div className='text4'>
                            <div className='checkrem'>
                                <input type="checkbox" className='check' /><span className='remember'>Remember me</span>
                            </div>
                            <Link to="/ForgotPassword" className='forgotten'>Forgotten Password?</Link>
                        </div>
                        {/* <RememberMeButton/> */}
                        <input className='LoginBtn' type="submit" value="Log in" />

                        <div className='PrivacyFooter'>
                            {/* <p>By signing up, you accept our <br /> <span><a href="TermsOfService">Terms of Service and Privacy Policy</a></span></p> */}
                            <p className='account'>Dont have an account? <span><a href="" className='signup'>Sign up</a></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage