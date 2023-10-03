import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {    

  return (
    <header>
        <Navbar collapseOnSelect expand="lg" className="navbar-custom">      
            <Navbar.Brand href="#home">
                <img
                src="./src/assets/logo.svg"
                width="30"
                height="30"
                className="logo ms-3"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-dark icon-custom me-3"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features" className="mx-3 text-uppercase text-white">Accueil</Nav.Link>
                <Nav.Link href="#pricing" className="mx-3 text-uppercase text-white">Matchs</Nav.Link>
                <Nav.Link href="#pricing" className="mx-3 text-uppercase text-white">Parier</Nav.Link>
                
            </Nav>
            <Nav>
                <Nav.Link href="#deets" className="mx-3 text-uppercase text-white">Se connecter</Nav.Link>            
            </Nav>
            </Navbar.Collapse>      
        </Navbar>
    </header>
  );
}

export default Header;