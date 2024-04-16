import { useEffect, useState } from 'react';
import axios from 'axios';
import UploadImage from './UploadImage';
import './css/content.css';



function Content(props) {

  return (
    <div>
      {/* <h1>File Upload Example</h1> */}
      <UploadImage />
    </div>
  );
 }

 export default Content;
