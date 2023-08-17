import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./CustomModal.css";
export default function CustomModal({
  show,
  handleClose,
  children,
  actions,
}) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className='bottom-modal-container'
        dialogClassName='bottom-modal  para-text'>
        {/* <Modal.Header
          className='share-modal-header'
          closeButton>
          <Modal.Title className='text-md'>
            Share Drivers Information
            <span className='share-sub-title'>
              Share with anyone
            </span>
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='text-center para-text'>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}
