import { NavLink } from "react-router-dom";
import React  from "react";
import  Image  from "react-bootstrap/Image";
//NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Row } from "react-bootstrap";

export const Navigation = () => {
  const normalLink = "";


  return (
    <nav id="menu" className="row navbar navbar-default navbar-fixed-top">
      <div className="container container-nav-flotex" id="flotex-nav-id">
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="row nav navbar-nav navbar-right nav-flotex menu-navbar-flotex">
            <NavLink
              id="flotex-home-css"
              to="/header"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              <Row >
              <Image src="img/logo.png" 
                />

              </Row>
            </NavLink>

            <NavLink
              id="nav-a-flotex"
              to="/features"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Features
            </NavLink>
            <NavLink
              id="nav-a-flotex"
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              About
            </NavLink>

            <NavLink
              id="nav-a-flotex"
              to="/services"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Services
            </NavLink>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li> */}
            <NavLink
              id="nav-a-flotex"
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Gallery
            </NavLink>

            <NavLink
              id="nav-a-flotex"
              to="/testimonials"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Testimonials
            </NavLink>
            <NavLink
              id="nav-a-flotex"
              to="/team"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Team
            </NavLink>

            <NavLink
              id="nav-a-flotex"
              to="/contact"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Contacto
            </NavLink>

            <NavLink id="nav-a-flotex" to='/dolar' className={ ({ isActive }) => (isActive ? 'bg-nav-flotex' : normalLink )}>
              Dolar
            </NavLink>
            {/* <NavLink to='/piso' className={ ({ isActive }) => (isActive ? 'bg-nav-flotex' : normalLink )}>
              Piso
            </NavLink> */}

            <NavLink
              to="/login"
              onClick={"modalFlotex"}
              id="nav-a-flotex"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              {/* // to='/login' onClick={"modalFlotex"} className={ ({ isActive }) => (isActive ? 'bg-nav-flotex' : normalLink ) }> */}
              Intranet
            </NavLink>
          </ul>
        </div>

        <Container className="nav-responsive-flotex"  >
          <Row>
          {[false].map((expand) => ( 
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Brand href="#">
                  <Row className=" col-md-12 col-lg-12 col-sm-12 ">
                <Image src="img/logo.png"  
/>

                  </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      MENU
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <NavLink
                        to="/header"
                      >Home
                      </NavLink>
                      <NavLink
                        to="/features"
                      >Feactures
                      </NavLink>
                      <NavLink
                        to="/about"
                      >About
                      </NavLink>
                      <NavLink
                        to="/services"
                      >Services
                      </NavLink>
                      <NavLink
                        to="/gallery"
                      >Gallery
                      </NavLink>
                      <NavLink
                        to="/team"
                      >Team
                      </NavLink>
                      <NavLink
                        to="/login"
                      >Intranet
                      </NavLink>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
            ))}
          </Row>
        </Container>
      </div>
    </nav>
  );

};

