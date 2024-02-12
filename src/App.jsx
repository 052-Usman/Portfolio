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

  useEffect(() => {
    particlesJS("particles-js", {
      particles: {
        number: { value: 250, density: { enable: true, value_area: 1000 } },
        color: { value: "#E63E21" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 6,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 80,
          color: "#E63E21",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 8,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce",
          bounce: false,
          attract: { enable: false, rotateX: 1763.753266952075, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: false, mode: "repulse" },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.5 } },
          bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3,
          },
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <>
      <div
        id="particles-js"
        style={{ zIndex: 0, position: "fixed", width: "100%", height: "100%" }}
      ></div>

      <Container fluid={isMobile}>
        <Row>
          <Col>
            <Header style={{ zIndex: 99 }}></Header>
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
