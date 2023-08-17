// import React from "react";
// import { useState } from "react";
// import { ReactBingmaps } from "react-bingmaps";
// import "./style.css";
// import MenuOption from "../../../components/menu/menu-option";
// import {
//   Accordion,
//   Button,
//   Offcanvas,
// } from "react-bootstrap";
// import { Icon } from "@iconify/react";
// import { Link } from "react-router-dom";
// function HomeScreen() {
//   const [scrollZoomEnabled, setScrollZoomEnabled] =
//     useState(false);
//   const [show, setShow] = useState(false);

//   // Defining functions to handle offcanvas show and hide
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title></Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           {/* User profile section */}
//           <div className='d-flex'>
//             <img
//               className='profile-pic'
//               src='/Assets/Ellipse.svg'
//               alt='DisplayPicture'
//             />
//             <div className='canvas-top d-flex flex-column'>
//               <span>Kate Lesley</span>
//               <Link to='/profile'>View your profile</Link>
//             </div>
//           </div>
//           {/* Menu options */}
//           <MenuOption
//             icon={
//               <img
//                 src='/Assets/notification.svg'
//                 alt='notification'
//               />
//             }
//             name={"Notification"}
//             notification={true}
//             link={"/passengers/notifications"}
//           />
//           <Accordion
//             className='accordion-menu-option'
//             defaultActiveKey={["0"]}
//             alwaysOpen>
//             {/* Accordion component for displaying ride options */}
//             <Accordion.Item eventKey='0'>
//               <Accordion.Header>
//                 <MenuOption
//                   icon={
//                     <img
//                       src='/Assets/people-in-car.svg'
//                       alt='ride'
//                     />
//                   }
//                   name={"Rides"}
//                 />
//               </Accordion.Header>
//               <Accordion.Body>
//                 <MenuOption
//                   name={"Find a ride"}
//                   link={"/passengers/findRide"}
//                 />
//                 <MenuOption
//                   name={"Ongoing ride"}
//                   link={"/passengers/ongoingRides"}
//                 />
//               </Accordion.Body>
//             </Accordion.Item>
//           </Accordion>
//           {/* Other menu options */}
//           <MenuOption
//             icon={
//               <img src='/Assets/clock.svg' alt='clock' />
//             }
//             name={"Previous Trips"}
//           />
//           <MenuOption
//             icon={<img src='/Assets/star.svg' alt='star' />}
//             name={"Support"}
//           />
//           <MenuOption
//             icon={
//               <img src='/Assets/circle.svg' alt='circle' />
//             }
//             name={"About"}
//           />
//           {/* Button for becoming a driver */}
//           <div className='mt-5 d-flex align-items-center justify-content-center'>
//             <Button variant='primary'>
//               Become a Driver
//             </Button>
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           position: "relative",
//         }}>
//         <button
//           className='iconEllipse map-menu-button'
//           onClick={handleShow}>
//           <Icon
//             icon='material-symbols:menu'
//             color='#0c3ead'
//             height={"24px"}
//             width={"24px"}
//           />
//         </button>
//         <div
//           style={{
//             border: "1px solid red",
//             width: "100%",
//             height: "100vh",
//           }}>
//           <ReactBingmaps
//             center={[13.0827, 80.2707]}
//             zoom={11}
//             bingmapKey={
//               "AsmOnsw2KxZ7cpOuLsldQ4jnqAIAp5JdvqLT2KQoAyztVOQYyGPjUgxCVk0bhkQE"
//             }></ReactBingmaps>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomeScreen;
// import React, { useRef, useState } from "react";
// import { ReactBingmaps } from "react-bingmaps";
// import "./style.css";

// const HomeScreen = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [bingmapKey] = useState(
//     "AksOASfzdybmndjlOxhWnhZaNtzG5CMgqUFIgB5Ji8W6Gr748WQL5mijk5w4OmDD"
//   );
//   const callBackMethod = () => {
//     console.log("Callback method");
//   };

//   const [infoboxes, setInfoboxes] = useState([
//     {
//       location: [13.0827, 80.2707],
//       option: { title: "Chennai", description: "..." },
//       addHandler: {
//         type: "click",
//         callback: callBackMethod,
//       },
//     },
//   ]);
//   const [pushPins, setPushPins] = useState([
//     {
//       location: [13.0827, 80.2707],
//       option: { color: "red" },
//       addHandler: {
//         type: "click",
//         callback: callBackMethod,
//       },
//     },
//   ]);
//   const [regularPolygons, setRegularPolygons] = useState([
//     {
//       center: [13.0827, 80.2707],
//       radius: 5,
//       points: 36,
//       option: {
//         fillColor: "rgba(0,0,0,0.5)",
//         strokeThickness: 2,
//       },
//     },
//   ]);
//   const [infoboxesWithPushPins, setInfoboxesWithPushPins] =
//     useState([
//       {
//         location: [13.0827, 80.2707],
//         addHandler: "mouseover",
//         infoboxOption: {
//           title: "Infobox Title",
//           description: "Infobox",
//         },
//         pushPinOption: {
//           title: "Pushpin Title",
//           description: "Pushpin",
//         },
//         infoboxAddHandler: {
//           type: "click",
//           callback: callBackMethod,
//         },
//         pushPinAddHandler: {
//           type: "click",
//           callback: callBackMethod,
//         },
//       },
//     ]);
//   const [boundary, setBoundary] = useState({
//     location: ["chennai"],
//     option: {
//       entityType: "PopulatedPlace",
//     },
//     polygonStyle: {
//       fillColor: "rgba(161,224,255,0.4)",
//       strokeThickness: 2,
//     },
//   });
//   const searchRef = useRef(null);

//   const handleSearch = () => {
//     const searchValue = searchRef.current.value;
//     console.log(searchValue);
//     if (searchValue) {
//       setBoundary({
//         location: [searchValue],
//         option: {
//           entityType: "PopulatedPlace",
//         },
//         polygonStyle: {
//           fillColor: "rgba(161,224,255,0.4)",
//           strokeThickness: 2,
//         },
//       });
//     }
//   };
//   return (
//     <div>
//       <div className='map-menu-button'>
//         <input type='text' ref={searchRef} />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <ReactBingmaps
//         bingmapKey={bingmapKey}
//         center={[13.0827, 80.2707]}
//         mapTypeId={"Aerial"}
//         pushPins={pushPins}
//         regularPolygons={regularPolygons}
//         infoboxes={infoboxes}
//         infoboxesWithPushPins={infoboxesWithPushPins}
//         boundary={boundary}
//         isVisible={isVisible}
//       />
//     </div>
//   );
// };

// export default HomeScreen;

import React, { useState, useRef } from "react";
import { ReactBingmaps } from "react-bingmaps";
import "./style.css";
import { Icon } from "@iconify/react";
import {
  Accordion,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuOption from "../../../components/menu/menu-option";

const HomeScreen = () => {
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
  const callBackMethod = (e) => {
    console.log("Callback method", e);
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
    const clickedLocation = e.location;
    console.log(clickedLocation);
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

export default HomeScreen;
