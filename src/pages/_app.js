import React from 'react';
import { UIDReset, UIDFork } from 'react-uid';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <UIDReset>
    <UIDFork>
      <Component {...pageProps} />
      </UIDFork>
    </UIDReset>  );
}
