import React from "react";
import { useNavigate } from "react-router";

function MenuOption({ icon, name, notification, link }) {
  const navigate = useNavigate();
  const changeRoute = () => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <div onClick={changeRoute} className='menu-option'>
      {icon}
      <span>{name}</span>
      {notification && (
        <div className='notify-badge'>
          <span>1</span>
        </div>
      )}
    </div>
  );
}

export default MenuOption;
