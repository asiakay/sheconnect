import React, { useState } from 'react';
import { firebaseApp } from '../../lib/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
    handleLogin(userCredential);
    } catch (error) {
      // Handle errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }
  };

  return (
    <form onSubmit={loginUser}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
