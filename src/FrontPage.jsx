import PropTypes from 'prop-types';
import AuthButtons from './Auth/AuthButtons';
import './css/FrontPage.css'; // Make sure to import the CSS file


const FrontPage = ({ onLogin }) => {
 return (
   <div className="front-page-container">
     <h1>Welcome to the Front Page</h1>
     <p>Login or Logout with one component</p>
     <AuthButtons onLogin={onLogin} />
   </div>
 );
};


// Validate props using PropTypes
FrontPage.propTypes = {
 onLogin: PropTypes.func.isRequired, // Add validation for the onLogin prop
};


export default FrontPage;


