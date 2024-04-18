import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Backend from './ServerRequests.jsx';
import './css/dropdown-list.css';

const DropdownList = ({ selectedList, setSelectedList, description }) => {
  const [refreshLists, setRefreshLists] = useState(true);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // Fetch lists when component mounts or refreshLists changes
    async function fetchLists() {
      try {
        let response = await Backend.fetchLists();
        setLists(response);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    if (refreshLists) {
      setRefreshLists(false);
      fetchLists();
    }
  }, [refreshLists]); // Only re-run effect if refreshLists changes

  const handleSelectList = (list) => {
    setSelectedList(list);
  };

  const handleDeleteItem = (itemIndex) => {
    if (!selectedList) return;

    const updatedItems = selectedList.items.filter((item, index) => index !== itemIndex);
    setSelectedList({ ...selectedList, items: updatedItems });
  };

  useEffect(() => {
    // Log selectedList when it changes
    console.log('Selected List:', selectedList);
  }, [selectedList]); // Only re-run effect if selectedList changes

  if (description && selectedList) {
    let descriptionStr = description;
    let keywords = descriptionStr.replace(/[^\w\s]/g, '').replace(/\d+/g, '').trim().replace(/\s+/g, ' ').split(' ');
    for (let item of selectedList.items) {
      for (let keyword of keywords) {
        if (item.name.split(' ')[0].toLowerCase() === keyword.toLowerCase()) {
          item.imagePath = './src/images/checkmark.jpg';
          console.log('It worked!!');
        }
      }
    }
  }

  return (
    <div>
      <h2>Dropdown List</h2>
      <div>
        <select onChange={(e) => handleSelectList(lists.find(list => list.title === e.target.value))}>
          <option value="">Select a list...</option>
          {lists.map(list => (
            <option key={list.id} value={list.title}>{list.title}</option>
          ))}
        </select>
      </div>
      {selectedList && (
        <div className="tasks-container">
          <h3>{selectedList.title}</h3>
          <ul className="task-list">
            {selectedList.items.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
                <img className="minipi" src={item.imagePath} />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownList;
