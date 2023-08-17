import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./DriversPage.css"

const License = () => {
  const navigate = useNavigate()
  return (
    <div>
       
      <Header title={"Personal information and vehicle details"}/>

      <div className='DriversDetails'>
        <p className='LicenseText'>Your national ID and license details will be keep private. </p>
        <div className='PersonalForm'>
          <form action="">
          <div className='InputFields' style={{marginBottom : '0px'}}>
                <label className='LabelNames' for="DriversLicense">Driver License or JTB Form Number</label>
                <input className='Fields' type="text" name="DriversLicense" id="DriversLicense" placeholder='AB235235'/>
              </div>
              <p className='LicenseText'>License number on your Driver’s documents </p>
              <input className='SignUpBtn' type="submit" value="Next" onClick={() => navigate('/Document')}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default License