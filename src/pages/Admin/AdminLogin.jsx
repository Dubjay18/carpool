import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
import NavBar from '../../components/Nav/Nav'
import PasswordInput from "../../components/Password/Password"
// import RememberMeButton from '../../components/RemeberMe/RememberMe';


 const AdminLoginPage = () => {
  return (
    <div className='Login-page'>
        <NavBar/>
            <div className='flex'>
                <img className='CarImage' src="/Assets/car.png" alt="Car Image" />
            </div>
        <div className='FormPage'>
            <div>
                <p className='text'>Log <span className='text2'>In</span></p>
            </div>
            <div class="google-button-container">
                <button class="google-button">
                    <img src="/Assets/Google.svg" alt="Google Icon" className='google-icon'/>
                    <p className='googletext'>Use a Google Account</p>
                </button>
            </div>
            <div class="divider-container">
                <span class="divider-line"></span>
                <span class="divider-text">or</span>
                <span class="divider-line"></span>
            </div>
            <div className='RegistrationInputs'>
                <form action="">
                <div className='InputFields'>
                <label for="email" className='labelemail'>E-mail</label>
                    <input className='email' type="email" id="email" name="email" />
                </div>
                
                <div className='InputFields'>
                    <label for="Password" className='labelpass'>Password</label>
                        <PasswordInput/>
                </div>
                <div className='text4'>
                    <div className='checkrem'>
                        <input type="checkbox" className='check' /><span className='remember'>Remember me</span>
                    </div>
                    <a href='/forgotten-password' className='forgotten'>Forgotten Password?</a>
                </div>
                {/* <RememberMeButton/> */}
                <input className='LoginBtn' type="submit" value="Log in" />

                <div className='PrivacyFooter'>
                    {/* <p>By signing up, you accept our <br /> <span><a href="TermsOfService">Terms of Service and Privacy Policy</a></span></p> */}
                    <p className='account'>Dont have an account? <span><a href="/SignUp" className='signup'>Sign up</a></span></p>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminLoginPage