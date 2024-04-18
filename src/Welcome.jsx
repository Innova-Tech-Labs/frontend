import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/greetings.css';

function Welcome({ showModal, handleClose }) {

  return (
    <Modal show={showModal} onHide={handleClose} animation={false}>
      <Modal.Header>
        <Modal.Title>Welcome to the Scavenger Hunt!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Hello and welcome, scavenger hunt participant! We are excited to have you join us on this adventure.
          Our scavenger hunt will take you to various locations, including beaches, mountains, cities, restaurants, and iconic landmarks.
          Your task is to locate specific items or landmarks based on the clues provided. These items could be anything from natural wonders to man-made monuments.
          Use the tasks provided to guide you to the locations where these items may be found.
          Remember to have fun exploring new places and discovering hidden treasures along the way. Good luck, and happy hunting!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Start Hunting!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Welcome;