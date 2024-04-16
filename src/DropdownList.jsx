import React, { useState } from 'react';
import axios from 'axios';

const DropdownList = () => {
  const [selectedList, setSelectedList] = useState(null);
  const [lists, setLists] = useState([]);

  const fetchLists = async () => {
    try {
      let response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/lists`)
      setLists(response.json().data);
    } catch (error) {
      console.error('Error retrieving lists:', error);
    }
  }
  fetchLists();
  
  const handleSelectList = (list) => {
    setSelectedList(list);
  };

  const handleDeleteItem = (itemIndex) => {
    const updatedItems = selectedList.items.filter((item, index) => index !== itemIndex);
    setSelectedList({ ...selectedList, items: updatedItems });
  };

  return (
    <div>
      <h2>Dropdown List</h2>
      <div>
        <select onChange={(e) => handleSelectList(lists.find(list => list.id === parseInt(e.target.value)))}>
          <option value="">Select a list...</option>
          {lists.map(list => (
            <option key={list.id} value={list.id}>{list.title}</option>
          ))}
        </select>
      </div>
      {selectedList && (
        <div>
          <h3>{selectedList.title}</h3>
          <ul>
            {Object.entries(selectedList).map((item, index) => (
              <li key={index}>
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
                <img src={item[1]}></img>
                  {item[0]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownList;
