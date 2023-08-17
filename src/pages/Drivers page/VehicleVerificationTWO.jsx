import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./DriversPage.css"

const VehicleVerificationTWO = () => {
  return (
    <div>
          <Header title={"Verify your vehicle"}/>

          <div className='DriversDetails'>
          <div className='InputFields'  style={{marginBottom: "0px"}}>
                <label className='LabelNames' for="VehicleYear">Vehicle Year</label>
                <input className='Fields' list="VehicleYear" />
                <datalist id='VehicleYear'>
                    <option value="2022"></option>
                    <option value="2021"></option>
                    <option value="2020"></option>
                </datalist>

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
              <p className='VehicleText'>if you don't find your vehicle model from the list then let us know. </p>
              <div className='InputFields'>
                <label className='LabelNames' for="VPN">Vehicle Plate Number</label>
                <input className='Fields' type="text" name="VPN" id="VPN" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="VC">Vehicle Color</label>
                <input className='Fields' type="text" name="VC" id="VC" />
              </div>
              
              <input className='SignUpBtn' type="submit" value="Submit Document" style={{marginTop: "100%"}} />
          </div>
    </div>

  )
}

export default VehicleVerificationTWO