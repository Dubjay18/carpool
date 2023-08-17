import React, { useState } from 'react';
import "./OTP.css"
import Header from "../../components/global/Header/Header"


const OTP = () => {
    const [digits, setDigits] = useState(['', '', '', '']);
  const [activeSlot, setActiveSlot] = useState(0);

  const handleDigitClick = (digit) => {
    const updatedDigits = [...digits];
    if (activeSlot < updatedDigits.length) {
      updatedDigits[activeSlot] = digit;
      setDigits(updatedDigits);
      setActiveSlot(activeSlot + 1);
    }
  };

  const handleClearClick = () => {
    const updatedDigits = [...digits];
    if (activeSlot > 0) {
      updatedDigits[activeSlot - 1] = '';
      setActiveSlot(activeSlot - 1);
      setDigits(updatedDigits);
    }
  };

  return (
    <div className='code'>
     {/* <div className='BlueContainer'>
            <div className='WhiteContainer'>
                <a href=""><img className='arrow-left' src="/Assets/arrow-left.svg" alt="arrow-left" /></a>
            </div>
        </div>  */}
      <Header/>
      <div className='whitebox'>
        <div className='top'>
        <p className='verify'>Verify</p>
        <p className='sent'>We have sent an OTP  to your phone number</p>
      
    <div className="verification-container">
    <form action="">
    <div className="verification-input">
        {digits.map((digit, index) => (
          <div key={index} className={`digit ${index === activeSlot ? 'active' : ''}`}>
            {digit}
            {index === activeSlot && <div className="cursor" />}
          </div>
        ))}
      </div>
      <p className='resend'>Resend OTP?</p>
      <input className='SendBtn' type="submit" value="Confirm Code"/>
    </form>
    </div>
    </div>
        <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'key', 0].map((digit) => (
          <button key={digit} onClick={digit === 'key' ? null : () => handleDigitClick(digit)}>
            {digit === 'key' ? '' : digit}
          </button>
        ))}
        <button onClick={handleClearClick}>Clear</button>
      </div>
    </div>
    </div>
  );
};

export default OTP