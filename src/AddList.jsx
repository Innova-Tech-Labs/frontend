import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ListModal = ({ showModal, handleClose }) => {
  const [phase, setPhase] = useState(1);
  const [title, setTitle] = useState('');
  const [numItems, setNumItems] = useState(5);
  const [listItems, setListItems] = useState(Array.from({ length: numItems }, () => ''));

  const handleNumItemsChange = (e) => {
    setNumItems(parseInt(e.target.value));
    setListItems(Array.from({ length: parseInt(e.target.value) }, () => ({ name: '' })));
  };

  const addList = async (newList) => {
    // try {
      const listObj = { title: title, items: newList.map((str) => ({ name: str, imagePath: '' })) };
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/lists`, listObj);
    // } catch (error) {
    //   console.error('Error saving new list:', error);
    // }
  };

  const handleSaveChanges = () => {
    if (phase === 1) {
      setPhase(2);
    } else {
      addList(listItems);
      handleClose();
      setPhase(1);
    }
  };

  const handleInputChange = (index, value) => {
    const newListItems = [...listItems];
    newListItems[index] = value;
    setListItems(newListItems);
  };

  const renderPhaseOne = () => (
    <Form.Group>
      <Form.Label>Enter the title of the new list:</Form.Label>
      <Form.Control
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="List Title"
      />
    </Form.Group>
  );

  const renderPhaseTwo = () => (
    <>
      <Form.Group>
        <Form.Label>How many items will this list have?</Form.Label>
        <Form.Control as="select" value={numItems} onChange={handleNumItemsChange}>
          {[...Array(16).keys()].map((num) => (
            <option key={num + 5} value={num + 5}>
              {num + 5}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      {listItems.map((item, index) => (
        <Form.Group key={index}>
          <Form.Label>{`Item ${index + 1}:`}</Form.Label>
          <Form.Control
            type="text"
            value={item}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </Form.Group>
      ))}
    </>
  );

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{phase === 1 ? 'New List - Title' : 'New List - Items'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{phase === 1 ? renderPhaseOne() : renderPhaseTwo()}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          {phase === 1 ? 'Next' : 'Create List'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ListModal;