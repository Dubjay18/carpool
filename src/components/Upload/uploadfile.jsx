import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './uploadfile.css';

// const FileChooser = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
  
//     const handleFileChange = (event) => {
//       const file = event.target.files[0];
//       setSelectedFile(file);
//     };
  
//     return (
//       <div className="file-chooser">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           style={{ display: 'none' }}
//           id="file-input"
//         />
//         <label htmlFor="file-input">
//           <button className="choose-button">Choose File</button>
//         </label>
//         {selectedFile && (
//           <p>Selected file: {selectedFile.name}</p>
//         )}
//       </div>
//     );
//   };
  
//   export default FileChooser;

const FileChooser = () => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        console.log('Selected file:', file.name);
      }
    };
  
    return (
      <div className="file-chooser">
        <label>
          <button className="choose-button">+Upload file</button>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    );
  };
  
  export default FileChooser;
  