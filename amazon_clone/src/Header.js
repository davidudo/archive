import { Container, Badge, Image, Nav, Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import amazon_logo from "./amazon_logo.svg"
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import { signOut } from "firebase/auth";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue()
  
  const handleAuthetication = () => {
    if (user) {
      signOut(auth)
    }
  }
  
  const pageNotAvailable = () => {
    alert("Page Not Available")
  }
  
  return (
    <Navbar 
      collapseOnSelect 
      sticky="top" 
      expand="sm" 
      bg="dark" 
      variant="dark"
      className="py-0 container-fluid"
    >
         <Navbar.Brand 
           href="#home" 
           className=""
           style={{ maxHeight: "75px", }}
         >
           <Link to="/">
            <img 
              src={ amazon_logo }
              style={{ height: "auto", width: "100px", marginTop: "-15px"}}
            />
           </Link>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-3" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-2 me-2">
                <Form className="d-flex me-2">
                  <InputGroup className="me-1" style={{ minWidth: "53vw" }}>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2"
                      aria-label="Search"
                      size="sm"
                    />
                    <Button variant="warning">
                     <Search fontSize="large"/>
                    </Button>
                  </InputGroup>
                </Form>
                <Link to={!user && '/login'} style={{ textDecoration: "none", }}>
                <Nav.Link 
                  href="#login"
                  className="lh-1"
                  onClick={handleAuthetication}
                >
                  <Typography variant="subtitle2">
                    Hello Guest
                  </Typography>
                  <span className="text-light">
                    { user ? 'Sign Out' : 'Sign In' }
                  </span>
                </Nav.Link>
              </Link>
              <Link to='/orders' style={{ textDecoration: "none", }}>
                <Nav.Link href="#orders" className="lh-1">
                  <Typography variant="subtitle2">
                    Return
                  </Typography>
                  <span className="text-light">
                    & Order
                  </span>
                </Nav.Link>
              </Link>
              <Nav.Link 
                href="" 
                className="lh-1"
                onClick={ pageNotAvailable }
              >
                <Typography variant="subtitle2">
                  Your
                </Typography>
                <span className="text-light">
                  Prime
                </span>
              </Nav.Link>
              
              <Link to='checkout'>
              <Nav.Link
                href="#checkout" 
                className="d-flex position-relative"
                style={{
                  maxWidth: "2.5rem", 
                  maxHeight: "auto"
                }}
              >
                  <ShoppingCart fontSize="large" className="position-relative"/>
                  <Badge
                  className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-secondary border border-dark border-2"
                  style={{
                    fontSize: "0.8rem", 
                    marginTop: "0.7rem",
                    color: "#FF9900"
                  }}
                  >
                    {cart?.length}
                  </Badge>
              </Nav.Link>
              </Link>

            </Nav>
          </Navbar.Collapse>
    </Navbar>
  )
}

export default Header