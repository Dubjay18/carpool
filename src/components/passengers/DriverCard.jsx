import React, { useState } from "react";
import "../../bootstrap.min.css";
import "./DriverCard.css";
import { Icon } from "@iconify/react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import CustomModal from "../global/CustomModal";
function DriverCard({
  name = "Tony Stark",
  picture = "/Assets/RatingPicture.svg",
  passengers = "4",
  rating = 4.4,
  pending = false,
  location = "Campus Gate",
  variant,
}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [cancelShow, setCancelShow] = useState(false);
  const handleCancelClose = () => setCancelShow(false);
  const handleCancelShow = () => setCancelShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className=' my-5 py-2 mx-2 bg-white drivers-card '>
        <div className='d-flex my-4 mx-3  driver-card-container'>
          <img
            src={picture}
            width={"50px"}
            height={"50px"}
            alt='profile-pic'
          />
          <div>
            <h6
              className=''
              style={{
                width: "170px",
              }}>
              {name}
            </h6>
            <p className='text-sm text-muted d-flex align-items-center '>
              <span>{rating}</span>
              <img
                src='/Assets/rating-star.svg'
                alt='rating-star'
              />{" "}
            </p>
          </div>
          {variant === "ongoing" ? (
            <div className='actions d-flex align-items-center '>
              <span
                className='red'
                onClick={handleCancelShow}>
                <Icon
                  icon={"mdi:close-thick"}
                  color='#fff'
                  height={"24px"}
                  width={"24px"}
                  className='mb-auto'
                />
              </span>
              <span className='blue' onClick={handleShow}>
                <Icon
                  icon={"mdi:check"}
                  color='#fff'
                  height={"24px"}
                  width={"24px"}
                  className='mb-auto'
                />
              </span>
            </div>
          ) : (
            <div>
              {pending ? (
                <div className='p-2 status'>
                  <span>Pending</span>
                </div>
              ) : (
                <Button
                  variant='primary'
                  className='status-btn'>
                  Request
                </Button>
              )}
            </div>
          )}
        </div>
        <div className='d-flex align-items-center justify-content-between px-3'>
          {variant !== "ongoing" && (
            <div
              style={{
                display: "flex",
              }}>
              {" "}
              {/* <Icon
                icon={"material-symbols:directions-car"}
                color='#161616'
                height={"24px"}
                width={"24px"}
                className='mb-auto'
              /> */}
              <img
                className='mb-auto'
                src='/Assets/people-in-car.svg'
                alt='car'
                height={"24px"}
                width={"24px"}
              />
              <div>
                <span className='text-md ml-2'>
                  {" "}
                  Toyota Camry
                </span>
                <br />
                <span
                  className='font-size-14 ml-2'
                  style={{
                    fontSize: "13px",
                    color: "gray",
                    marginRight: "9px",
                  }}>
                  {passengers} passengers
                </span>
              </div>
            </div>
          )}

          <div
            className=''
            // style={{
            //   marginLeft: "80px",
            // }}
          >
            <Icon
              icon={"material-symbols:location-on-rounded"}
              color='#161616'
              height={"21px"}
              width={"21px"}
              className='mb-auto'
            />
            <span
              className=''
              style={{
                fontWeight: "normal",
                marginLeft: "5px",
              }}>
              {location}
            </span>
          </div>
          {variant === "ongoing" && (
            <div className='d-flex align-items-center'>
              <img src='/Assets/money-2.svg' alt='money' />
              <span className='ml-2'>#500</span>
            </div>
          )}
        </div>
      </div>
      <CustomModal
        show={cancelShow}
        handleClose={handleCancelClose}>
        <span className='text-bold cancel-modal-text'>
          Are you sure you want to end this ride?{" "}
        </span>
        <br />
        <div className='my-2 px-3'>
          <Button
            onClick={() => {
              handleCancelClose();
            }}
            variant='danger'
            className='btn-block '>
            End Ride
          </Button>
        </div>
        <div className='my-3 px-3'>
          <Button
            onClick={() => {
              handleCancelClose();
            }}
            variant='outline-danger'
            className='btn-block '>
            Cancel
          </Button>
        </div>
      </CustomModal>
      <CustomModal show={show} handleClose={handleClose}>
        <span className='text-bold'>
          Thanks for Riding with Tag!{" "}
        </span>
        <br />
        <p className='bottom-modal-text'>
          Glad your ride was a success! We appreciate your
          choice and hope to see you again soon.
        </p>
        <br />
        <div className=' px-3'>
          <Button
            onClick={() => {
              navigate("/RatingDriver");
              handleClose();
            }}
            variant='primary'
            className='btn-block '>
            Rate Driver
          </Button>
        </div>
      </CustomModal>
    </>
  );
}

export default DriverCard;
