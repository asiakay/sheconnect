import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <ListGroup className="mt-3">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
        Link 2
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;
