import React from 'react'
import "./LoginPage.css"
import Header from '../../components/global/Header/Header'
import { Icon } from '@iconify/react';

const CurrentRide = () => {
  return (
    <div className='OngoingRide'>
        <Header title={"Ongoing Ride"} menuType={true}/>
        <div className='BigWhiteBox'>
            
        <div>
        <div className='Destination'>
            <p>Destination: Campus Gate</p>
        </div>
        <p className='Passengers'>Passengers</p>
        <div className='RideBox'>
            <div className='whitebox'>
                <div className='d-flex'>
                    <img src="/Assets/rectangle7.svg" alt="" />
                    <p className='text'>James Onigidi</p>
                </div>
                <div>
                    <Icon icon="material-symbols:cancel" color="red" width="30" height="30" />
                    <Icon icon="fluent:checkmark-circle-12-filled" color="blue" width="30" height="30" />
                </div>
            </div>
            <div class="line"></div>
            <div className='container'>
                <div className='Address'>
                    <img src="/Assets/Address.svg" alt="" className='AddressIcon' />
                    <p className='text2'>oduduwa gate</p>
                </div>
                <div className='Money'>
                    <img src="/Assets/money-2.svg" alt="" className='MoneyIcon' />
                    <p className='text2'>#300</p>
                </div>
            </div>
        </div>
        <div className='RideBox'>
            <div className='whitebox'>
                <div className='d-flex'>
                    <img src="/Assets/rectangle7.svg" alt="" />
                    <p className='text'>Mary johnson</p>
                </div>
                <div>
                    <Icon icon="material-symbols:cancel" color="red" width="30" height="30" />
                    <Icon icon="fluent:checkmark-circle-12-filled" color="blue" width="30" height="30" />
                </div>
            </div>
            <div class="line"></div>
            <div className='container'>
                <div className='Address'>
                    <img src="/Assets/Address.svg" alt="" className='AddressIcon' />
                    <p className='text2'>Campus Gate</p>
                </div>
                <div className='Money'>
                    <img src="/Assets/money-2.svg" alt="" className='MoneyIcon' />
                    <p className='text2'>#600</p>
                </div>
            </div>
        </div>
        </div>
        <button className='Btn'>Share Driver's Information</button>
        </div>
    </div>
  )
}

export default CurrentRide