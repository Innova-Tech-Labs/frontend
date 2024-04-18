import { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import UploadImage from './UploadImage';
import DropdownList from './DropdownList';
import AddList from './AddList';
import './css/content.css';


function Content(props) {
  const [showWelcome, setShowWelcome] = useState(true);
  const closeWelcome = () => {setShowWelcome(false);}

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
      <Welcome showModal={showWelcome} handleClose={closeWelcome} />
      <UploadImage />
      <DropdownList />
      <button onClick={toggleAddList}>Add New List</button>
      <AddList showModal={showAddList} handleClose={toggleAddList} />
    </div>
  );
 }

 export default Content;
