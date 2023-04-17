import React from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

export default function Home() {

const HomePage = () => {
  return (
    <>
    <Head>
    <title>Create Next App</title>
    <meta name="description" content="Genereated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main>

    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
    </main>
    </>
  );
};
}
// export default HomePage;
