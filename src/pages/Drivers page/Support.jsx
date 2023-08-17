import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./DriversPage.css"

const Support = () => {
  return (
    <div>
        <Header title={"Support"} menuType = {true}/>
      <div className='DriversDetails'>
      <div className='SupportContact'>
      <Icon icon="ph:phone-call" color="rgba(0, 0, 0, 0.51)" width={"25px"} height={"25"} />
      {/* <p className='SupportText'>Call us</p> */}
      <a href="" className='SupportText'>Call us</a>
      </div>
      <div className='SupportContact'>
      <Icon icon="material-symbols:chat-outline" color="rgba(0, 0, 0, 0.51)" width={"25"} height={"25"} />
      {/* <p className='SupportText'>Chat with us</p> */}
      <a href="" className='SupportText'>Chat with us</a>
      </div>
      <div className='SupportContact'>
      <Icon icon="mingcute:mail-send-line" color="rgba(0, 0, 0, 0.51)" width={"25"} height={"25"} />
      {/* <p className='SupportText'>Send us an email</p> */}
      <a href="" className='SupportText'>Send us an email</a>
      </div>
      </div>

      
    </div>
  )
}

export default Support