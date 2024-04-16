import { useEffect, useState } from 'react';
import axios from 'axios';
import UploadImage from './UploadImage';
import DropdownList from './DropdownList';
import './css/content.css';

function Content(props) {

  return (
    <div>
      {/* <h1>File Upload Example</h1> */}
      <UploadImage />
      <h2>Dropdown List Example</h2>
      <DropdownList />
    </div>
  );
 }

 export default Content;
