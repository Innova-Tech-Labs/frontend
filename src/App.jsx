import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './Auth/AuthButtons';
import Profile from './Profile';
import Content from './Content';
import './css/app.css';
import './css/newList.css';



function App({ auth0 }) {

 return (
   <div className="app-container">
     <div className="background-image"></div>
     <div className="login-container">
       <h2>Login or Logout with one component</h2>
       <AuthButtons />
     </div>
     {auth0.isAuthenticated && (
       <>
         <Profile />
         <Content />
       </>
     )}
   </div>
 );
}


App.propTypes = {
 auth0: PropTypes.shape({
   isAuthenticated: PropTypes.bool.isRequired,
 }).isRequired,
};


export default withAuth0(App);
