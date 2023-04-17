import React, { useState } from 'react';
import { auth } from '../../lib/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        const authInstance = getAuth();

        try {
            await createUserWithEmailAndPassword(authInstance, email, password);

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={registerUser}>
            <h2>Register</h2>
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
      <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
