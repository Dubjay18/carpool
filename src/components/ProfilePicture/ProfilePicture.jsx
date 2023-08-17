import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './ProfilePicture.css';

const ProfilePicture = () => {
    const [profilePicture, setProfilePicture] = useState(null);
  
    const handlePictureChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setProfilePicture(fileReader.result);
        };
        fileReader.readAsDataURL(selectedFile);
      }
    };
  
    return (
      <div className="profile-picture-container">
        <input
          accept="image/*"
          id="profile-picture-input"
          type="file"
          onChange={handlePictureChange}
        />
        <label htmlFor="profile-picture-input">
          <div className="profile-picture">
            {profilePicture ? (
              <img src={profilePicture} alt="Profile" />
            ) : (
                <img className='DisplayPicture' src="/Assets/Ellipse.svg" alt="DisplayPicture" />
            )}
          </div>
        </label>
      </div>
    );
  };
  
  export default ProfilePicture;
  