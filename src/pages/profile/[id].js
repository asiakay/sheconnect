import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../api/userData';

import Header from '../../components/Header';
import MainContent from '../../components/MainContent.js';
import ProfileCard from '../../components/ProfileCard';
import Footer from '../../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

export async function getServerSideProps(context){
  const { id } = context.params;
  //const res = await fetch('http://localhost:3000/api/userData');

  const userData = await fetchUserData(id);

  return {
    props: {
      userData,
    },
  };
}
const ProfilePage = ({ userData }) => {
/*   const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const data = await fetchUserData();
      setUserData(data);
    }
    fetchData();
  }, []); */
  
  return (
    <div>
      <Header />

      <MainContent>
      <Container>

      <Row>
          <Col>
{/*       function handleEditProfile() {
    // TODO: Implement edit profile functionality
  } */}
    {userData ? (
    <ProfileCard userData={userData} /> 
    ):(
     <p>Loading...</p>
)}


        {/* Add profile-specific content here */}
{/*         // TODO: Implement dynamic connections and messaging sections
 */}
      </Col>
        </Row>
       </Container>

      </MainContent>

      <Footer />
    </div>
  );
};

export default ProfilePage;






