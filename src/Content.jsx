import { useEffect, useState } from 'react';
import axios from 'axios';
import UploadImage from './UploadImage';
import DropdownList from './DropdownList';
import AddList from './AddList';
import './css/content.css';

function Content(props) {
 
  const [showAddList, setShowAddList] = useState(false);
  const toggleAddList = () => {
   if (showAddList) {
     setShowAddList(false);
     console.log('Modal is off')
   } else {
     setShowAddList(true);
     console.log('Modal is on')
   }
  }
  
  return (
    <div>
      {/* <h1>File Upload Example</h1> */}
      <UploadImage />
      <h2>Dropdown List Example</h2>
      <DropdownList />
      <button onClick={toggleAddList}>Add New List</button>
      <AddList showModal={showAddList} handleClose={toggleAddList} />
    </div>
  );
 }

 export default Content;

