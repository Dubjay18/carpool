import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import Header from '../../components/global/Header/Header';


const EditProfile = () => {
  return (
    <div>
     <Header title={"Edit Profile"}/>

      <div className='FormPage'>
            <form action="">
            <div className='DP'>
            <ProfilePicture/>
            </div>
            <div className='InputFields'>
                <label className='LabelNames' for="FName">First Name</label>
                <input className='Fields' type="text" name="FName" id="FName" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="LName">Last Name</label>
                <input className='Fields' type="text" name="LName" id="LName" />
              </div>
              <div className='InputFields'>
              <label className='LabelNames' for="email">E-mail</label>
                <input className='Fields' type="email" id="email" name="email" />
              </div>
            <div className='InputFields'>
              <label className='LabelNames' for="phone">Phone Number</label>
              <input className='Fields' type="tel" name="phone" id="phone" placeholder="+234" />
              </div>
              <div className='InputFields'>
              <label className='LabelNames' for="DOB">Date of Birth</label>
              <input  className='Fields' type="date" name="DOB" id="DOB" />

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
              <div className='CityState'>
              <div className='InputFields' style={{width: '48%'}}>
                <label className='LabelNames' for="City">City</label>
                <input className='Fields' type="text" name="City" id="City" />
              </div>
              <div className='InputFields' style={{width: '48%'}}>
                <label className='LabelNames' for="State">State</label>
                <input className='Fields' type="text" name="State" id="State" />
              </div>
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="HomeAdd">Home Address</label>
                <input className='Fields' type="text" name="HomeAdd" id="HomeAdd" />
              </div>
              <input className='SignUpBtn' type="submit" value="Update Profile" />
            </form>

      </div>


    </div>
  )
}

export default EditProfile