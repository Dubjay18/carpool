import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./DriversPage.css"


const PersonalDetails = () => {
  const navigate = useNavigate()
  return (
    <div>
    <Header title={"Personal Information and Vehicle Details"} />

        <div className='DriversDetails'>
            <p className='DetailsText'>Only your first name and vehicle details are visible to 
            clients during booking </p>
            <div className='PersonalForm'>
                <form action="">
                <div className='InputFields'>
                <label className='LabelNames' for="FirstName">First Name</label>
                <input className='Fields' type="text" name="FirstName" id="FirstName" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="LastName">Last Name</label>
                <input className='Fields' type="text" name="LastName" id="LastName" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="Gender">Gender</label>
                <input className='Fields' list="Gender" />
                <datalist id='Gender'>
                    <option value="Male"></option>
                    <option value="Female"></option>
                    <option value="Other"></option>
                </datalist>

              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="City">City</label>
                <input className='Fields' type="text" name="City" id="City" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="State">State</label>
                <input className='Fields' type="text" name="State" id="State" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="HomeAddress">Home Address</label>
                <input className='Fields' type="text" name="HomeAddress" id="HomeAddress" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="VehicleModel">Vehicle Model and Manufacturer</label>
                <input className='Fields' list="VehicleModel" />
                <datalist id='VehicleModel'>
                    <option value="Toyota"></option>
                    <option value="Lexus"></option>
                    <option value="Mercedes Benz"></option>
                </datalist>

              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="VPN">Vehicle Plate Number</label>
                <input className='Fields' type="text" name="VPN" id="VPN" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="VC">Vehicle Color</label>
                <input className='Fields' type="text" name="VC" id="VC" />
              </div>
              <div className='InputFields'  style={{marginBottom: "0px"}}>
                <label className='LabelNames' for="VehicleYear">Vehicle Year</label>
                <input className='Fields' list="VehicleYear" />
                <datalist id='VehicleYear'>
                    <option value="2022"></option>
                    <option value="2021"></option>
                    <option value="2020"></option>
                </datalist>

              </div>

              <p className='VehicleText'>if you don't find your vehicle model from the list then let us know. </p>
       
                    <input className='SignUpBtn' type="submit" value="Next" onClick={() => navigate('/License')} />
                </form>
            </div>
        </div>

    </div>
  )
}

export default PersonalDetails