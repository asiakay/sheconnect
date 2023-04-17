import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MainContent = () => {
    return (
      <Container>
        <Row>
        <Col xs={12} sm={10} md={8} lg={9}>
            {/* Main content */}
            <h2>Main Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      
          </Col>
          <Col xs={12} sm={2} md={4} lg={3}>
            {/* Sidebar content */}
            <h2>Sidebar Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default MainContent;
  