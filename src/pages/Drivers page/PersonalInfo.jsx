import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css";
import Header from '../../components/global/Header/Header';
import FileChooser from '../../components/Upload/uploadfile';

const PersonalInfo = () => {
    return (
        <div>
                {/* <div className='NavTop'>
         <div className='iconEllipse'>
         <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
         </div>
          <h6 className='DetailsNavTopText'>Document</h6>
          </div> */}
          <Header title={"Verify your vehicle"}/>
    
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
                <input className='SignUpBtn' type="submit" value="Submit"  />
          </div>
    
        </div>
      )
    }

export default PersonalInfo