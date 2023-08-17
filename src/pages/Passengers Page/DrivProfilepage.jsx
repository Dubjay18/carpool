// import React from 'react'
import React from 'react';
import Header from '../../components/global/Header/Header'
import "./LoginPage.css"
import { Carousel } from 'react-bootstrap';

const DrivProfilepage = () => {
    // const carouselRef = useRef(null);

    // const scrollLeft = () => {
    //   carouselRef.current.scrollBy({
    //     left: -200, // Adjust scroll distance as needed
    //     behavior: 'smooth',
    //   });
    // };
  
    // const scrollRight = () => {
    //   carouselRef.current.scrollBy({
    //     left: 200, // Adjust scroll distance as needed
    //     behavior: 'smooth',
    //   });
    // };
  return (
    <div className='DrivProfile'>
        <Header title={"Driver's Profile"}/>
            <div className='Whitebox'>
                <div className='ProfilePage'>
                    <img src="/Assets/profile.svg" alt="" />
                </div>
                <div className='Introduction'>
                    <p>My name is James onigidi i am currently a student of obafemi Awolowo university (Level 2).
                            I would love to make some fuel money from this app by carrying people.</p>
                </div>
                <div>
                    <p className='Details'>Vehicle's Details</p>
                </div>
                <Carousel className='carousel'>
                    <Carousel.Item>
                        <img
                        className="carousel-image"
                        src="/Assets/Rectangle11.svg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carousel-image"
                        src="/Assets/Rectangle12.svg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carousel-image"
                        src="/Assets/Rectangle11.svg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='details'>
                    <div className='vehicleDetails'>
                        <img src="/Assets/people-in-car.svg" alt="" />
                        <p>Toyota Corolla</p>
                    </div>
                    <div className='PassengersDetails'>
                        <img src="/Assets/Passenger.svg" alt="" />
                        <p>4 Passengers</p>
                    </div>
                </div>
                <div className='Font'>
                    <p>Destination</p>
                </div>
                <div className='Destination'>
                    <img src="/Assets/Address.svg" alt="" />
                    <p>Campus gate</p>
                </div>
                <div>
                    <div className=''>
                    <p className='header'>Instructions</p>
                    <p className='text'>My name is James onigidi i am currently a student of obafemi Awolowo university (Level 2).
                        I would love to make some fuel money from this app by carrying people.</p>
                    </div>
                    <p className='text2'>Rating</p>
                    <div className='Rectangle'>
                        <div>
                            <img src="/Assets/Rectangle7.svg" alt="" />
                        </div>
                        <div className='Writing'>
                            <p>A very good driver, quiet and reserved</p>
                        </div>
                        <div className='Rate'>
                            <p className='Number'>4.8</p>
                            <img src="/Assets/star.svg" alt="" />
                        </div>
                    </div>
                    <div className='charge'>
                        <img src="/Assets/Naira.svg" alt="" />
                        <p className='charge2'>2000</p>
                    </div>
                    <div>
                        <button className='Btn'>Send Request</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DrivProfilepage