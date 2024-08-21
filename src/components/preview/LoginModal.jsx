import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const LoginModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Login Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            You need to be logged in to access this page. Please log in first.
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => window.location.href = "/login"}>
                Go to Login
            </Button>
        </Modal.Footer>
    </Modal>
);

export default LoginModal;
