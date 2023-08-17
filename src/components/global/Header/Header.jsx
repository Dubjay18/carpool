// Importing necessary modules and components
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Accordion,
  Button,
  Offcanvas,
} from "react-bootstrap";
import MenuOption from "../../menu/menu-option";

function Header({ title, extend, menuType }) {
  // Initializing state variables
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // Defining functions to handle offcanvas show and hide
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Rendering the header component
  return (
    <>
      {/* Offcanvas component for displaying menu options */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* User profile section */}
          <div className='d-flex'>
            <img
              className='profile-pic'
              src='/Assets/Ellipse.svg'
              alt='DisplayPicture'
            />
            <div className='canvas-top d-flex flex-column'>
              <span>Kate Lesley</span>
              <Link to='/profile'>View your profile</Link>
            </div>
          </div>
          {/* Menu options */}
          <MenuOption
            icon={
              <img
                src='/Assets/notification.svg'
                alt='notification'
              />
            }
            name={"Notification"}
            notification={true}
            link={"/passengers/notifications"}
          />
          <Accordion
            className='accordion-menu-option'
            defaultActiveKey={["0"]}
            alwaysOpen>
            {/* Accordion component for displaying ride options */}
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                <MenuOption
                  icon={
                    <img
                      src='/Assets/people-in-car.svg'
                      alt='ride'
                    />
                  }
                  name={"Rides"}
                />
              </Accordion.Header>
              <Accordion.Body>
                <MenuOption
                  name={"Find a ride"}
                  link={"/passengers/findRide"}
                />
                <MenuOption
                  name={"Ongoing ride"}
                  link={"/passengers/ongoingRides"}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* Other menu options */}
          <MenuOption
            icon={
              <img src='/Assets/clock.svg' alt='clock' />
            }
            name={"Previous Trips"}
          />
          <MenuOption
            icon={<img src='/Assets/star.svg' alt='star' />}
            name={"Support"}
          />
          <MenuOption
            icon={
              <img src='/Assets/circle.svg' alt='circle' />
            }
            name={"About"}
          />
          {/* Button for becoming a driver */}
          <div className='mt-5 d-flex align-items-center justify-content-center'>
            <Button variant='primary'>
              Become a Driver
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Header component */}
      <div
        className={`NavTop-header ${
          extend ? "pb-nav " : "header-h"
        }`}>
        {/* Conditional rendering of menu icon or back arrow */}
        {menuType ? (
          <button
            className='iconEllipse'
            onClick={handleShow}>
            <Icon
              icon='material-symbols:menu'
              color='#0c3ead'
              height={"24px"}
              width={"24px"}
            />
          </button>
        ) : (
          <button
            className='iconEllipse'
            onClick={() => navigate(-1)}>
            <Icon
              icon='material-symbols:arrow-back'
              color='#0c3ead'
              height={"24px"}
              width={"24px"}
            />
          </button>
        )}

        {/* Title of the header */}
        <h6 className='DetailsNavTopText'>{title}</h6>
      </div>
    </>
  );
}

// Exporting the Header component as the default export of the module
export default Header;
