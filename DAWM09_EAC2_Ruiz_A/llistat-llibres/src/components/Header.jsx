import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/logo.svg";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Navbar.Brand className="navbar-brand" href="./">
        <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#link">Tots</Nav.Link>
          <Nav.Link href="#link">Còmic Americà</Nav.Link>
          <Nav.Link href="#link">Manga</Nav.Link>
          <Nav.Link href="#link">Ciència Ficció</Nav.Link>
          <Nav.Link href="#link">Fantasy</Nav.Link>
          <Nav.Link href="#link">Rol</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>
          <Nav.Link href="#link">Preferits</Nav.Link>
          <NavDropdown title="EAC2" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" className="bg-dark">
              Imatges
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="bg-dark">
              Audio
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="bg-dark">
              Video
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="bg-dark">
              Playlist
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="bg-dark">
              Transicions
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="bg-dark">
              Animacions
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="bg-dark">
              Gràfiques
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="bg-dark">
              Carousel
            </NavDropdown.Item>
            <NavDropdown.Divider className="bg-dark" />
            <NavDropdown.Item href="#action/3.4" className="bg-dark">
              Llista de llibres
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" className="bg-dark">
              Formulari de Contacte
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex search-bar">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="warning">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
