import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../bootstrap.min.css";
import "./SignUp.css";
import NavBar from "../../components/Nav/Nav";
import PasswordInput from "../../components/Password/Password";
import { boolAnyEmptyInList } from "../../utils/validators";
import axiosInstance, { logAxiosResponse } from "../../utils/request";
import { Link, useNavigate } from "react-router-dom";
// import RememberMeButton from '../../components/RemeberMe/RememberMe';

const SignUpPage = () => {
    const navigate = useNavigate();

    // Damn a state manager??
    const [signUpState, setSignUpState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const validateForm = () => {
        // check if all are defined
        const { password, confirmPassword } = signUpState;

        if (boolAnyEmptyInList(Object.values(signUpState)))
            throw new Error("Please fill all details");
        if (password !== confirmPassword)
            throw new Error("Password not consistent");

        return signUpState;
    };

    const handleUserRegistration = async (eventObj) => {
        eventObj.preventDefault();
        try {
            // first validate the form data
            const validData = validateForm();
            // form valid, proceed
            const response = await axiosInstance.post(
                "/auth/register",
                {
                    firstName: validData.firstname,
                    lastName: validData.lastname,
                    email: validData.email,
                    phone: validData.phone,
                    password: validData.password
                }
            )
            // register successful, proceed
            alert(JSON.stringify(response.data.msg))
            navigate(
                `/VerifyPassword/${validData.email}`,
            )

        } catch (errorRegistering) {
            logAxiosResponse(errorRegistering)
        };
    };

    // an input component will be better
    const inputOption = {
        onChange: (ev) =>
            setSignUpState({
                ...signUpState,
                [ev.target.name]: ev.target.value,
            }), // could set value from this option?:)
    };

    return (
        <div className='SignUp-page'>
            <NavBar />
            <div className='flex'>
                <img
                    className='CarImage'
                    src='/Assets/car.png'
                    alt='Car Image'
                />
            </div>
            <div className='FormPage'>
                <div>
                    <p className='text'>
                        Log <span className='text2'>in</span>
                    </p>
                </div>
                <div class='google-button-container'>
                    <button class='google-button'>
                        <img
                            src='/Assets/Google.svg'
                            alt='Google Icon'
                            className='google-icon'
                        />
                        <p className='googletext'>
                            Use a Google Account
                        </p>
                    </button>
                </div>
                <div class='divider-container'>
                    <span class='divider-line'></span>
                    <span class='divider-text'>or</span>
                    <span class='divider-line'></span>
                </div>
                <div className='RegistrationInputs'>
                    <form onSubmit={handleUserRegistration}>
                        <div className='InputFields'>
                            <label for='email' className='labelemail'>
                                First Name
                            </label>
                            <input
                                className='email'
                                type='text'
                                id='email'
                                name='firstname'
                                {...inputOption}
                            />
                        </div>
                        <div className='InputFields'>
                            <label for='email' className='labelemail'>
                                Last Name
                            </label>
                            <input
                                className='email'
                                type='text'
                                id='email'
                                name='lastname'
                                {...inputOption}
                            />
                        </div>
                        <div className='InputFields'>
                            <label for='email' className='labelemail'>
                                Email Address
                            </label>
                            <input
                                className='email'
                                type='email'
                                id='email'
                                name='email'
                                {...inputOption}
                            />
                        </div>
                        {/* <div className='InputFields'>
                <label for="email" className='labelemail'>Email Address</label>
                    <input className='email' type="email" id="email" name="email" />
                </div> */}
                        <div className='InputFields'>
                            <label for='email' className='labelemail'>
                                Phone Number
                            </label>
                            <input
                                className='email'
                                type='number'
                                id='email'
                                name='phone'
                                {...inputOption}
                            />
                        </div>

                        <div className='InputFields'>
                            <label for='Password' className='labelpass'>
                                Password
                            </label>
                            <PasswordInput
                                value={signUpState["password"]}
                                {...inputOption}
                                name={"password"}
                            />
                        </div>

                        <div className='InputFields'>
                            <label for='Password' className='labelpass'>
                                Confirm Password
                            </label>
                            <PasswordInput
                                value={signUpState["confirmPassword"]}
                                {...inputOption}
                                name='confirmPassword'
                            />
                        </div>
                        {/* <RememberMeButton/> */}
                        <button onClick={() => navigate('/verifycode')} className='LoginBtn' type='submit'>
                            Sign Up
                        </button>
                    </form>
                    <div className='text4'>
                        <div className='checkrem'>
                            <input type='checkbox' className='check' />
                            <span className='remember'>
                                I agree to the{" "}
                                <span className='Terms'>
                                    Terms & Conditions
                                </span>
                            </span>
                        </div>
                        {/* <a href='' className='forgotten'>Forgotten Password?</a> */}
                    </div>
                    <div className='PrivacyFooter'>
                        {/* <p>By signing up, you accept our <br /> <span><a href="TermsOfService">Terms of Service and Privacy Policy</a></span></p> */}
                        <p className='account'>
                            Already a user?{" "}
                            <span>
                                <Link to="/Login" className="signup">Log in</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
