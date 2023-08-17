import React, { useState } from 'react';
import './NewPassword.css';
import PasswordInput from '../../components/Password/Password';
import Header from '../../components/global/Header/Header';

const Newpass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Passwords match - perform further actions (e.g., submit form)
    }
  };

  return (
    <div className='NewPassword'>
      <Header title={"New Password"}/>

      <div className='Whitebox'>
        <p className='text'>New Password</p>
        <p className='text2'>Please enter your new password</p>

        <div>
          <form onSubmit={handleSubmit}>
            <div className='InputFields'>
              <label htmlFor='password' className='labelpass'>
                Password
              </label>
              <PasswordInput value={password} onChange={handlePasswordChange} />
            </div>
            <div className='InputFields'>
              <label htmlFor='confirmPassword' className='labelpass2'>
                Confirm Password
              </label>
              <PasswordInput value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </div>
            {error && <div className='error-message'>{error}</div>}
            <input type='submit' className='SendBtn' value='Confirm Password'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newpass;

