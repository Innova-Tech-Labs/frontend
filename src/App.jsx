import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './Auth/AuthButtons';
import Profile from './Profile';
import Content from './Content';
import './css/app.css';

function App(props) {
  return (
    <div className="app-container">
      <div className="login-container">
        <h2>Login or Logout with one component</h2>
        <AuthButtons />
      </div>
      {props.auth0.isAuthenticated && (
        <>
          <Profile />
          <Content />
        </>
      )}
      {!props.auth0.isAuthenticated && (
        <>
          <div className="front-page-container">
            <h1>Welcome to the Front Page</h1>
            <p>Please Sign In</p>
          </div>
        </>
      )}
    </div>
  );
}

export default withAuth0(App);
