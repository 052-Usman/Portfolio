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
        <Col className="div-back-specialist specialist-1">
          Full Stack Developer
        </Col>
      </div>
    </>
  );
}

export default Specialist;
