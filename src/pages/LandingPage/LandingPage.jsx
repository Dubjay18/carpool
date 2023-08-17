import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../bootstrap.min.css"
import "./LandingPage.css"
import Nav from '../../components/Nav/Nav'
import NavBar from '../../components/Nav/Nav'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className='landing-page'>
      <NavBar />
      <div>
        <div className='flex'>
          <img className='CarpoolingImage' src="/Assets/phone.svg" alt="Car pooling image" />
        </div>
      </div>
      <div className='textclass'>
        <div>
          <p className='textstyle'><b>Going<span className='textColor'> Somewhere? Tag</span> along</b></p>
        </div>
        <button
          // TODO: could use a master button component
          onClick={() => navigate('/Signup')}
          type="button" className='purplebutton'>Sign Up</button>
        <button onClick={() => navigate('/DriversSignup')}
          type="button" className='whitebutton'>Become a Driver</button>
        <div className='stats'>
          <span><h1>10+</h1><p>passengers</p></span>
          <span><h1>20+</h1><p>drivers</p></span>
          <span><h1>60+</h1><p>routes</p></span>
        </div>
      </div>
      <div className='locationSetter'>
        <h4 className='locationText'>Where are you going</h4>
        <div class="dropdownbtn input-group mb-3">
          <select class=" form-select" id="inputGroupSelect02" style={{ height: "48px" }}>
            <option selected><p className='dropdownText'>Pick a location</p></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="dropdownbtn input-group mb-3">
          <select class="form-select" id="inputGroupSelect02" style={{ height: "48px" }}>
            <option selected >Destination</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <button type="button" className='purplebutton' style={{ margin: "6% 0 0 0" }}>Find a ride</button>
      </div>



      <div>

        <div className='InstructionPage'>
          <h4>How to book a ride</h4>
          <div className='ellipse'>
            <h1>1</h1>
          </div>
          <div class="vertical-line"></div>
          <div className='stepshape'>
            <p>Step 1</p>
          </div>
          <div class="inverted-triangle"></div>
          <h4>Select a pickup location</h4>
          <p className='step-instruction'>you will have to select a location that you would love to be picked. Your journey starts here.</p>

        </div>


        <div className='InstructionPage'>
          <div className='ellipse' style={{ backgroundColor: "#858247" }}>
            <h1>2</h1>
          </div>
          <div class="vertical-line" style={{ backgroundColor: "#858247" }}></div>
          <div className='stepshape' style={{ backgroundColor: "#858247" }}>
            <p>Step 2</p>
          </div>
          <div class="inverted-triangle" style={{ borderBottomColor: "#858247" }}></div>
          <h4 style={{ color: "#858247" }}>Select a pickup location</h4>
          <p className='step-instruction'>you will have to select a location that you would love to be picked. Your journey starts here.</p>

        </div>


        <div className='InstructionPage'>
          <div className='ellipse' style={{ backgroundColor: "#CC0A118F" }}>
            <h1>3</h1>
          </div>
          <div class="vertical-line" style={{ backgroundColor: "#CC0A118F" }}></div>
          <div className='stepshape' style={{ backgroundColor: "#CC0A118F" }}>
            <p>Step 3</p>
          </div>
          <div class="inverted-triangle" style={{ borderBottomColor: "#CC0A118F" }}></div>
          <h4 style={{ color: "#CC0A118F" }}>Select a pickup location</h4>
          <p className='step-instruction'>you will have to select a location that you would love to be picked. Your journey starts here.</p>

        </div>
      </div>

      <div className='FAQ'>
        <p>Frequently asked question</p>

        <select class=" FAQform-select" id="inputGroupSelect02" >
          <option selected><p className='dropdownText'>How can i earn as a driver on the website</p></option>
          <option disabled="disabled">You can ean as a driver by simply picking up and dropping passengers at their your destination</option>
        </select>

        <select class=" FAQform-select" id="inputGroupSelect02">
          <option selected><p className='dropdownText'>What do i need to sign up a driver?</p></option>
          <option disabled="disabled">All you need is a valid ID, both passport and license and also a functional car</option>
        </select>

        <select class=" FAQform-select" id="inputGroupSelect02">
          <option selected><p className='dropdownText'>As a passenger, How fast is a ride going to be available</p></option>
          <option disabled="disabled">This comes down to the number of available drivers around you</option>
        </select>
      </div>


      <div className='LastImage'>
        <div className='LastImageDiv'><h1 className='LastImageText'>RideTogether: Your Carpooling Companion</h1></div>
        <div className='LastImageDiv2'><p className='LastImageText2'>"Join Our Eco-Friendly Carpooling Community
          - Share Rides, Save Miles, and Build Meaningful Connections with Like-Minded Commuters"</p></div>
        <button type="button" className='purplebutton' style={{ borderRadius: "5px", width: "70%"}}>Sign up to get started</button>
      </div>
    </div>



  )
}

export default LandingPage