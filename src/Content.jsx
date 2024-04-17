import { useEffect, useState } from 'react';
import axios from 'axios';
import UploadImage from './UploadImage';
import DropdownList from './DropdownList';
import AddList from './AddList';
import Tasks from './Tasks';
import ScavengerHuntWelcome from './ScavengerHuntWelcome';
import NewList from './NewList';
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
      <div className="button-container">
         <div className="dropdown">
           <button className="dropbtn">Dropdown Button</button>
           <NewList />
         </div>
       </div>
      {/* <h1>File Upload Example</h1> */}
      <UploadImage />
      <h2>Dropdown List Example</h2>
      <DropdownList />
      <button onClick={toggleAddList}>Add New List</button>
      <AddList showModal={showAddList} handleClose={toggleAddList} />
      <Tasks />
      <NewList />
      <ScavengerHuntWelcome />
      
    </div>
  );
 }

 export default Content;

