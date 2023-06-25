import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/Navbar.css';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/home">Kase J</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <NavDropdown title="Certifications" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Certification 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Certification 2</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Certification 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
