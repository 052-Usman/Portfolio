import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
