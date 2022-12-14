import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Timer from "./Timer";

export default function NavbarDarkExample(props) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">NOBELFINDER</Navbar.Brand>
       
        {props.searchBar}
        <Navbar.Toggle aria-controls="navbar-dark-example" />

        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            {/*
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="FILTER"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">YEAR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CATEGORY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MOST POPULAR</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                TEAM 1 PRODUCTION
              </NavDropdown.Item>
            </NavDropdown>
            */}
            <NavDropdown
              title="Laureate of the day"
            >
              <Timer />
            </NavDropdown>
            
            {props.popupButton}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}