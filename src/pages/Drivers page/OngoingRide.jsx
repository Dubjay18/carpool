import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./DriversPage.css"



const OngoingRide = () => {
  return (
    <div>
           <Header title={"Ongoing Ride"}/>

     <div className='DriversDetails'>
     <div className='Destination'>
        <p className='DestinationText'>Current Destination: Campus Gate</p>
      </div>

      <div className='PassengerNumber'>
        <h3 className='PassengerHeader'><b>Passengers</b></h3>
        <img src="/Assets/ExclaimationTriangle.svg" alt="NOPASSENGER" className='ExclaimationImage' />
        <p className='PassengerSubText'>You currently do not have any passenger onboard yet, Make sure to check your notifications for passengers request</p>
      </div>

      <div>
      <input className='SignUpBtn' type="submit" value="Check Requests" />
      </div>

     </div>
    </div>
  )
}

export default OngoingRide