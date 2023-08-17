import React, { useState } from "react";
import Header from "../../../../components/global/Header/Header";
import DriverCard from "../../../../components/passengers/DriverCard";
import { Button, Modal } from "react-bootstrap";
import "./OngoingRides.css";
import { Icon } from "@iconify/react";
function OngoingRides() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='ongoing-container'>
        <Header title={"Ongoing Rides"} menuType={true} />
        <DriverCard variant='ongoing' />
        <div className='btn-container px-3'>
          <Button
            onClick={handleShow}
            variant='primary'
            className='btn-block '>
            Share Driver’s Information
          </Button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        className='bottom-modal-container'
        dialogClassName='bottom-modal share-modal'>
        <Modal.Header
          className='share-modal-header'
          closeButton>
          <Modal.Title className='text-md'>
            Share Drivers Information
            <span className='share-sub-title'>
              Share with anyone
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='share-options my-2 d-flex align-items-center justify-content-between bg-white py-2 px-2 rounded'>
            <span>Copy</span>
            <Icon
              icon='akar-icons:copy'
              color='#000'
              width='20'
              height='20'
            />
          </div>
          <div className='share-options my-2 d-flex align-items-center justify-content-between bg-white py-2 px-2 rounded'>
            <span>Add to readinglist</span>
            <img
              src={"/Assets/reading.svg"}
              alt='reading'
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OngoingRides;
