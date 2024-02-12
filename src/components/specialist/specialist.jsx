import { Row, Col, Button } from "react-bootstrap";

import { Text_Data } from "../../assets/text-file";
import "./specialist.scss";

function Specialist() {
  const specialist = Text_Data.recent_work;
  return (
    <>
      <div
        xs={12}
        className="d-flex"
        style={{ justifyContent: "center", flexWrap: "wrap" }}
      >
        <Col
          style={{ zIndex: 99 }}
          className="div-back-specialist specialist-1"
        >
          Full Stack Developer
        </Col>
        <Col
          xs={12}
          className="d-flex"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              zIndex: 99,
            }}
            className="spec-width"
          >
            <Col className="div-back-specialist specialist-2">MEAN/MERN</Col>
          </div>
          <div
            style={{
              zIndex: 99,
            }}
            className="spec-width"
          >
            <Col className="div-back-specialist specialist-3">Android</Col>
          </div>
        </Col>
      </div>
    </>
  );
}

export default Specialist;
