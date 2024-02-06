import { Row, Col, Button } from "react-bootstrap";

import { Text_Data } from "../../assets/text-file";
import "./recent-work.scss";

function RecentWork() {
  const recentWork = Text_Data.recent_work;
  return (
    <>
      <div
        xs={12}
        className="main-div-back d-flex"
        style={{ justifyContent: "center", flexWrap: "wrap" }}
      >
        <Col xs={12} className="recent-work">
          <div className="circle"></div>
          <div className="ms-2 top-text">Recent Work</div>
        </Col>
        <Col xs={12} className="project-container">
          {recentWork.map((work, index) => (
            <Col key={index} className="project">
              <Col className="work-details">
                <div className="name">{work.name}</div>
                <div className="time">{work.time}</div>
              </Col>
              <Col xs={4} className="type">
                {work.type}
              </Col>
            </Col>
          ))}
        </Col>
      </div>
    </>
  );
}

export default RecentWork;
