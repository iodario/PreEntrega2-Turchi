import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import '../App.css';

function NavBar() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <img src="./assets/dario.png" alt="logo" width="86" height="86" />
                <Navbar.Brand href="#home" style={{ fontWeight: 'bold', marginLeft: '35px' }}>Lambda Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About us</Nav.Link>
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                            Laptops & Computers
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                            TVs & Projectors
                            </NavDropdown.Item>                            
                            <NavDropdown.Item href="#action5">
                            Headphones
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                            Cellphones
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                            Tablets & E-Readers
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">
                            Contact us
                        </Nav.Link>
                    </Nav>
                   
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className ="search-button">Search</Button>
                    </Form>
                    <CartWidget style = {{marginLeft: '50px'}}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;