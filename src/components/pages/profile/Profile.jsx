
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Profile = ({ user }) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>
              <h3>User Profile</h3>
            </Card.Header>
            <Card.Body>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Age:</strong> {user.age}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
