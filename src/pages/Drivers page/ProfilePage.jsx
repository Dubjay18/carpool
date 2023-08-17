import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./DriversPage.css"


const ProfilePage = () => {

  

  return (
    <div>
        <Header title={"Passenger's Profile"} menuType = {true}/>

      <div className='DriversDetails'>
        <div className='PictureText'>
        <img className='PassengerPic' src="/Assets/PassengersPicture.svg" alt="Passenger's Picture" />
        <p className='ProfileText'>My name is James onigidi i am currently a student of obafemi Awolowo university (Level 2).
            I would love to make some fuel money from this app by carrying people.</p>
        </div>
        <div className='PassengerInfo'>
            <h3 className='HeadingInfo'>Passengers Information</h3>
            <p>Destination: <span><b>Campus Gate</b></span></p>
            <p>Pick up Location: <span><b>Oduduwa Gate</b></span></p>
            <p>Nos of Passengers: <span><b>3</b></span></p>
            <p>Phone: <span><b>08045632112</b></span></p>
        </div>
        <div className='Rating'>
            <h3 className='RatingText'>Rating</h3>
            <div className='RatingStyle'>
                <img src="/Assets/RatingPicture.svg" alt="Passenger" style={{width: '18%'}}/>
                <p style={{width: '75%', margin: '0 1%' }}>A very good passenger,quiet and reserved </p>
                <p style={{width: '18%',  margin: '0'}}>4.8 <Icon icon="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars" color="#da940c" width="18" height="18" /></p>
            </div>

        </div>
        <input className='SignUpBtn' type="submit" value="Accept Request" />
      </div>

    </div>
  )
}

export default ProfilePage