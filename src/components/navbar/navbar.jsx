import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Row, Col } from "react-bootstrap";

import "./navbar.scss";

function Header() {
  return (
    <>
      <Row>
        <Col
          className="my-3 d-flex"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div
            className="logo-circle p-2 d-none d-md-flex"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Navbar.Brand href="#home">
              <img src="./logo.svg" alt="logo" />
            </Navbar.Brand>
          </div>
          <div style={{ width: "100%" }}>
            <Navbar expand="md" className="custom-navbar">
              <Container fluid>
                <Col
                  xs={12}
                  className="d-md-flex d-none"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Col xs={12} md={4} className="d-flex">
                    <Nav.Link href="#home">Home</Nav.Link>
                  </Col>
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex"
                    style={{ justifyContent: "center" }}
                  >
                    <p className="desc">PORTFOLIO</p>
                  </Col>
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex"
                    style={{ justifyContent: "end" }}
                  >
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Col>
                </Col>
                <Col
                  xs={12}
                  className="d-md-none d-flex"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Navbar.Brand href="#home">
                    <img src="./logo.svg" alt="logo" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="offcanvasNavbar">
                    <img src="./menu-btn.svg" alt="menu" />
                  </Navbar.Toggle>
                </Col>
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                  className="custom-offcanvas"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                      Portfolio
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="d-flex d-md-none">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Header;
