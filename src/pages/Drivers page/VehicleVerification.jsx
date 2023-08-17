import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css";
import FileChooser from '../../components/Upload/uploadfile';
import Header from '../../components/global/Header/Header';

const VehicleVerification = () => {
  return (
    <div>
 <Header title={"Verify your Vehicle"} menuType = {true}/>

<div className='DriversDetails'>
        <div className='DocumentUpload'>
        <h4 className='DocumentText'>Vehicle Inspection Policy</h4>
        <p className='DocumentSubText'>Upload a snapshot of your vehicle inspection policy</p>
        {/* <button className='Uploadbutton'>+Upload file</button> */}
        <FileChooser/>

        <hr />

    </div>
    <div className='DocumentUpload'>
        <h4 className='DocumentText'>Vehicle Insurance Policy</h4>
        <p className='DocumentSubText'>Upload a snapshot of your vehicle insurance policy</p>
        {/* <button className='Uploadbutton'>+Upload file</button> */}
        <FileChooser/>

        <hr />

    </div>
    <div className='DocumentUpload'>
        <h4 className='DocumentText'>Front photo of your car</h4>
        <p className='DocumentSubText'>Upload a clear front photo that captures the plate number.</p>
        {/* <button className='Uploadbutton'>+Upload file</button> */}
        <FileChooser/>

        <hr />

    </div>
    <div className='DocumentUpload'>
        <h4 className='DocumentText'>Back photo of your car</h4>
        <p className='DocumentSubText'>Upload a clear back photo that captures the plate number.</p>
        {/* <button className='Uploadbutton'>+Upload file</button> */}
        <FileChooser/>


        <hr />

    </div>
    <div className='DocumentUpload'>
        <h4 className='DocumentText'>Interior Photo of your car</h4>
        <p className='DocumentSubText'>Upload a clear interior photo of your car</p>
        {/* <button className='Uploadbutton'>+Upload file</button> */}
        <FileChooser/>

        <hr style={{backgroundColor: 'black'}} />

    </div>
    <input className='SignUpBtn' type="submit" value="Next" />
</div>

</div>
  )
}

export default VehicleVerification