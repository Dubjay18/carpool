import React from 'react'
import "../../bootstrap.min.css"
import "./AboutScreen.css"
import Header from '../../components/global/Header/Header'

const AboutScreen = () => {
  return (
    <div className='AboutScreen'>
        {/* <div className='BlueContainer'>
            <div className='WhiteContainer'>
                <a href=""><img className='menu' src="/Assets/menu.svg" alt="menu" /></a>
            </div>
            <p className='About'>About Tag</p>
        </div> */}
        <Header title={"About Tag"} menuType={true}/>

        <div className='Whitebox'>
            <p className='header'>About: Redefining Your Commute</p>
            <p className='text'>Welcome to Tag, where every journey becomes a shared adventure in affordable, smarter, Eco-conscious transportation. We're here to reinvent the way you move from place to place, one ride at a time. Tag isn't just an app; it's a movement to reshape how we travel, making it convenient, affordable, and impactful.
            Our mission is simple yet powerful: to offer you a platform that effortlessly connects passengers and drivers, reducing traffic congestion and contributing to a greener world. As you Tag along, you're not only saving money but also forming connections and embracing a more sustainable way of getting around.
            So come on, join the Tag movement today. Let's drive change together and create a future where every ride is a step towards a better world.
            Tag. Ride. Connect. Transform.</p>
        </div>
    </div>
  )
}

export default AboutScreen