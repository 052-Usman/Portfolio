import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import Header from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import { Toaster } from "react-hot-toast";

function App() {
  // State to manage whether the container should be fluid
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function to update the state based on viewport width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <>
      <Container fluid={isMobile}>
        <Row>
          <Col>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
            <Toaster position="bottom-right" reverseOrder={false} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
