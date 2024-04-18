import { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import UploadImage from './UploadImage';
import DropdownList from './DropdownList';


function Content(props) {
  const [showWelcome, setShowWelcome] = useState(true);
  const closeWelcome = () => {setShowWelcome(false);}
  return (
    <div>
      <Welcome showModal={showWelcome} handleClose={closeWelcome} />
      <UploadImage />
      <DropdownList />
    </div>
  );
 }

 export default Content;
