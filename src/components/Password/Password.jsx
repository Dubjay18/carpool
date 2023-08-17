// import React, { useState } from 'react';
// import { Icon } from '@iconify/react';
// import './Password.css';

// const PasswordInput = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [password, setPassword] = useState('');
  
//     // const handleTogglePassword = () => {
//     //   setShowPassword(!showPassword);
//     // };

//     const handleTogglePassword = (e) => {
//       e.stopPropagation(); // Prevent event propagation to the form
//       setShowPassword(!showPassword);
//     };
    
  
//     return (
//       <div className="password-container">
//         <input
//           type={showPassword ? 'text' : 'password'}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         //   placeholder="Enter password"
//           className="password-input"
//         />
//         <span className="password-toggle" onClick={handleTogglePassword}>
//           {showPassword ? <Icon icon="ph:eye" width="20" height="20" /> : <Icon icon="ph:eye-slash" width="20" height="20" />}
//         </span>
//       </div>
//     );
//   };

  
// export default PasswordInput;
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './Password.css';

const PasswordInput = ({
  value,
  name,
  onChange
}) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="password-container">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          name={name}
        //   placeholder="Enter password"
          className="password-input"
        />
        <span className="password-toggle" onClick={handleTogglePassword}>
          {showPassword ? <Icon icon="ph:eye" width="20" height="20" /> : <Icon icon="ph:eye-slash" width="20" height="20" />}
        </span>
      </div>
    
    );
  };

 

export default PasswordInput;
