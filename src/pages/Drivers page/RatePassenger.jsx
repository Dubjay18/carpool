import React from 'react'
import { Icon } from '@iconify/react';
import { FaStar } from 'react-icons/fa';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"
import Header from '../../components/global/Header/Header';
import RateDriver from '../../components/Rating/RateDriver';

const RatePassenger = () => {
  return (
    <div>
       <Header title={"Rate Passenger"} menuType = {true}/>
      <div className='DriversPassengerPage'>
        <RateDriver />


        <input className='SignUpBtn' type="submit" value="Submit" style={{marginTop: '80%'}}/>
      </div>

    </div>
  )
}

export default RatePassenger