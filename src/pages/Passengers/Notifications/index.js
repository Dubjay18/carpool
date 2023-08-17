import React, { useEffect, useState } from "react";
import Header from "../../../components/global/Header/Header";
import "./Notifications.css";
import NotificationCard from "../../../components/passengers/NotificationCard";
import { Button } from "react-bootstrap";
import CustomAlert from "../../../components/global/CustomAlert";
import { authAxiosInstance } from "../../../utils/request";

function Notifications() {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const [notifications, setNotifications] = useState([
    {
      username: "James Onigidi",
      message: "sent you a request"
    }
  ])

  const fetchNotifications = async () => {
    try {
      const rawNotifications = await authAxiosInstance.
        get("/notify")

      const fetchedNotifications = rawNotifications.data

      if (fetchedNotifications.message == "Success") {
        setNotifications(fetchedNotifications.notifications)
      }

      // TODO: set notifications
    } catch (errorFetchingNotifications) {
      console.log(errorFetchingNotifications)
    }
  }

  const fetchNotificationsTimer = () => {
    setInterval(fetchNotifications, 10_000)
  }

  useEffect(() => {
    fetchNotifications()
    fetchNotificationsTimer()
  }, [])

  return (
    <div className='notifications-page-container'>
      <Header title={"Notifications"} menuType={true} />
      <div className='p-3'>
        <h5>Today</h5>
        {
          notifications.map((note, index) => {
            return (
              <NotificationCard
                username={note.username}
                message={note.message}
              />
            )
          })
        }
        {/* <Button variant='primary' onClick={handleShow}>
          Launch demo modal
        </Button>
        <CustomAlert
          show={show}
          handleClose={handleClose}
        /> */}
      </div>
    </div>
  );
}

export default Notifications;
