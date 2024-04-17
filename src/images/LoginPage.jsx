import FrontPage from './FrontPage'; // Make sure to import the FrontPage component

const LoginPage = () => {
  // Function to handle the login action
  const handleLogin = () => {
    // Perform login actions here, such as redirecting to the login page
    console.log('Login button clicked');
  };

  return <FrontPage onLogin={handleLogin} />;
};

export default LoginPage;
