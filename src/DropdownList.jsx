import React, { useState } from 'react';
import axios from 'axios';

const DropdownList = () => {
  const [selectedList, setSelectedList] = useState(null);
  const [lists, setLists] = useState([]);
  const [newItem, setNewItem] = useState('');

  const fetchLists = async () => {
    try {
      let response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/lists`)
      setLists(response.json().lists);
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

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const updatedItems = [...selectedList.items, newItem.trim()];
      setSelectedList({ ...selectedList, items: updatedItems });
      setNewItem('');
    }
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
            {selectedList.items.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add new item..."
            />
            <button onClick={handleAddItem}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownList;
