import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./CustomAlert.css";
function CustomAlert({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='text-center'>
          <div className='d-flex align-items-center flex-column'>
            {" "}
            <img
              src='/Assets/check.svg'
              alt='check'
              className='mr-2'
              width='50px'
              height='50px'
            />
            <p className='cus-alert-header'>
              {" "}
              Document Submitted
            </p>
          </div>
          Thank you for submitting your document. We'll
          review it and get back to you.
          <br />
          <br />
          <Button variant={"primary"} onClick={handleClose}>
            Okay
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomAlert;
