import React from 'react'
import { Icon } from '@iconify/react';
import { FaStar } from 'react-icons/fa';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"
import Header from '../../components/global/Header/Header';
import RatePasseng from '../../components/Rating/RatePasseng';

const RatingDriver = () => {
  return (
    <div>
      <Header title={"Rate Driver"} menuType = {true}/>
      <div className='DriversPassengerPage'>
        <RatePasseng />


        <input className='SignUpBtn' type="submit" value="Submit" style={{marginTop: '80%'}}/>
      </div>

    </div>
  )
}

export default RatingDriver