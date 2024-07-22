import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Dashboard.css'; 
import { FaWolfPackBattalion } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <><div className='body'>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="#">
            <h3><FaWolfPackBattalion />  </h3>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto d-flex">
              <Nav.Link as={Link} to="/" className="mx-4">Home</Nav.Link>
              <Nav.Link as={Link} to="#" className="mx-4">About</Nav.Link>
              <Nav.Link as={Link} to="#" className="mx-4">Contact</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title={<><FaUser /></>} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile"><FaUser />  Profile  </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/"><FaSignOutAlt /> Logout </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="content-container">
        <Row>
          <Col md={2} className="sidebar" >
            <ul className="nav-list">
              <li>
                <Link to="AddPropertyForm">Add Property  </Link>
              </li>
              <li>
                <Link to="propertyList">Property List</Link>
              </li>
              
              <li>
                <Link to="propertyUpdate">Update</Link>
              </li>
            </ul>
          </Col>
          <Col md={10} className="main-content">
            <Outlet />
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Dashboard;
