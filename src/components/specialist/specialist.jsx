import { Row, Col, Button } from "react-bootstrap";

import { Text_Data } from "../../assets/text-file";
import "./specialist.scss";

function Specialist() {
  const specialist = Text_Data.recent_work;
  const tech_stack = Text_Data.tech_stack;
  return (
    <>
      <div
        xs={12}
        className="d-flex"
        style={{ justifyContent: "center", flexWrap: "wrap" }}
      >
        {tech_stack.map((stack, index) => (
          <div key={index} style={{ width: "100%" }}>
            <Col
              style={{ zIndex: 99, position: "relative", marginTop: "1rem" }}
              className="div-back-specialist specialist-1"
            >
              {stack.name}
            </Col>
            <Row>
              {stack.sub.map((subItem, subIndex) => (
                <Col key={subIndex} xs={6}>
                  <div className="spec-width d-flex">
                    <div
                      className={`div-back-specialist specialist-${
                        subIndex % 2 === 0 ? "2" : "3"
                      }`}
                      style={{
                        zIndex: 99,
                      }}
                    >
                      {subItem}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </>
  );
}

export default Specialist;
