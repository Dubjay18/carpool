import React, { useState, useRef } from "react";
import { ReactBingmaps } from "react-bingmaps";
import "../Passengers/Home/style.css";
import { Icon } from "@iconify/react";
import {
  Accordion,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuOption from "../../../src/components/menu/menu-option";


const DriversHomeScreen = () => {
    const [show, setShow] = useState(false);

    // Defining functions to handle offcanvas show and hide
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isVisible, setIsVisible] = useState(true);
    const [bingmapKey] = useState(
      "AsmOnsw2KxZ7cpOuLsldQ4jnqAIAp5JdvqLT2KQoAyztVOQYyGPjUgxCVk0bhkQE"
    );
    const [searchLocation, setSearchLocation] = useState("");
    const [mapLocation, setMapLocation] = useState([
      9.082, 8.6753,
    ]);
    const callBackMethod = () => {
      console.log("Callback method");
    };
    const [infoboxes, setInfoboxes] = useState([
      {
        location: [9.082, 8.6753],
        option: { title: "Nigeria", description: "..." },
        addHandler: {
          type: "click",
          callback: callBackMethod,
        },
      },
    ]);
    const [pushPins, setPushPins] = useState([
      {
        location: [9.082, 8.6753],
        option: { color: "red" },
        addHandler: {
          type: "click",
          callback: callBackMethod,
        },
      },
    ]);
    const [regularPolygons, setRegularPolygons] = useState([
      {
        center: [9.082, 8.6753],
        radius: 5,
        points: 36,
        option: {
          fillColor: "rgba(0,0,0,0.5)",
          strokeThickness: 2,
        },
      },
    ]);
    const [infoboxesWithPushPins, setInfoboxesWithPushPins] =
      useState([
        {
          location: [9.082, 8.6753],
          addHandler: "mouseover",
          infoboxOption: {
            title: "Infobox Title",
            description: "Infobox",
          },
          pushPinOption: {
            title: "Pushpin Title",
            description: "Pushpin",
          },
          infoboxAddHandler: {
            type: "click",
            callback: callBackMethod,
          },
          pushPinAddHandler: {
            type: "click",
            callback: callBackMethod,
          },
        },
      ]);
    const [boundary, setBoundary] = useState({
      search: ["nigeria"],
      option: {
        entityType: "PopulatedPlace",
      },
      polygonStyle: {
        fillColor: "rgba(0,0,0,0)",
        strokeColor: "red",
        strokeThickness: 2,
      },
    });
  
    const searchInputRef = useRef(null);
  
    const handleSearch = (e) => {
      e.preventDefault();
      setSearchLocation(searchInputRef.current.value);
      setBoundary({
        search: [searchInputRef.current.value],
        option: {
          entityType: "PopulatedPlace",
        },
        polygonStyle: {
          fillColor: "rgba(0,0,0,0)",
          strokeColor: "red",
          strokeThickness: 2,
        },
      });
      setMapLocation([]);
    };
  
    const handleMapClick = (e) => {
      setMapLocation([
        e.latitude.toFixed(4),
        e.longitude.toFixed(4),
      ]);
    };
  
    return (
      <>
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
        <div className='home-container'>
          <div className='search-container map-menu-button'>
            <button
              className='iconEllipse map-menu-button shadow'
              onClick={handleShow}>
              <Icon
                icon='material-symbols:menu'
                color='#0c3ead'
                height={"24px"}
                width={"24px"}
              />
            </button>
            <form onSubmit={handleSearch} className='input'>
              <div className="HomescreenLocation">
              <div className='cus-input d-flex align-items-center rounded-lg '>
                <Icon
                  icon='akar-icons:search'
                  color='##8A8894'
                  height={"14px"}
                  width={"14px"}
                />
                <input
                  type='text'
                  placeholder='Current Location'
                  ref={searchInputRef}
                />
                
              </div>
              <div style={{marginTop: "5%"}} className='cus-input d-flex align-items-center rounded-lg '>
                <Icon
                  icon='akar-icons:search'
                  color='##8A8894'
                  height={"14px"}
                  width={"14px"}
                />
                <input
                  type='text'
                  placeholder='Where are you Headed'
                  ref={searchInputRef}
                />
                
              </div>
              </div>
              <button type='submit' hidden={true}>
                Search
              </button>
            </form>
          </div>
          <ReactBingmaps
            bingmapKey={bingmapKey}
            center={mapLocation}
            zoom={11}
            infoboxes={infoboxes}
            pushPins={pushPins}
            regularPolygons={regularPolygons}
            infoboxesWithPushPins={infoboxesWithPushPins}
            boundary={boundary}
            onClick={handleMapClick}
            mapOptions={{
              showMapTypeSelector: false,
              disableScrollWheelZoom: false,
              disableStreetside: true,
              showZoomNavigation: false,
            }}
            showZoomNavigation={false}
            disableStreetside={true}
          />
        </div>
      </>
    );
  };
  
export default DriversHomeScreen