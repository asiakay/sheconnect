import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCIZLlvqHw1YxBGY3tZXhhHDBZJQCmUc2s",
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

const registerUser = async (email, password) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      return result.user;
    } catch (error) {
      throw error;
    }
  };

  const loginUser = async (email, password) => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      return result.user;
    } catch (error) {
      throw error;
    }
  };
  
export { auth, registerUser };
