import React from "react";
import { Card } from "react-bootstrap";

function NotificationCard({
  userImage,
  username,
  message,
  time,
}) {
  return (
    <>
      {" "}
      <Card className='notification-card '>
        {userImage ? (
          <img
            src={userImage}
            alt='profile-pic'
            height={"50px"}
            width={"50px"}
          />
        ) : (
          <img
            src='/logo512.png'
            alt='profile-pic'
            height={"50px"}
            width={"50px"}
          />
        )}

        <span>
          {" "}
          <span className='username'> @{username}</span>
          &nbsp;
          {message}
        </span>
        <div className='time'>
          <span className='mt-4'>{time}</span>
        </div>
      </Card>
    </>
  );
}

export default NotificationCard;
