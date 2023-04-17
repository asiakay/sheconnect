import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

const handleLogin = (userCredential) => {
  setLoggedInUser(userCredential.user);
};

return (
<div>
  {loggedInUser ? (
    <div>
      <h1>Welcome, {loggedInUser.displayName || loggedInUser.email}!</h1>
            {/* Render other components for logged-in users here */}
</div>
  ) : (
    <LoginForm handleLogin={handleLogin} />
    
  )}
    </div>

  );
};

export default Login;
