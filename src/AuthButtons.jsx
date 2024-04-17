import PropTypes from 'prop-types';


const AuthButtons = ({ onLogin }) => {
 return (
   <div>
     <button onClick={onLogin}>Login</button>
     {/* You can add additional buttons for logout or other authentication actions */}
   </div>
 );
};


// Define PropTypes for the component
AuthButtons.propTypes = {
 onLogin: PropTypes.func.isRequired, // Function to handle login action
 // You can define additional PropTypes as needed
};


export default AuthButtons;


