import { Row, Col, Button } from "react-bootstrap";
import Available_Job from "../../components/available-job/available-job";
import { Text_Data } from "../../assets/text-file";

import "./home.scss";

function Home() {
  return (
    <>
      <div
        xs={12}
        className="div1-back py-md-4 py-3 px-md-4 px-2 d-flex"
        style={{ justifyContent: "center", flexWrap: "wrap" }}
      >
        <Col
          xs={12}
          className="d-flex py-2"
          style={{
            justifyContent: "space-between",
            alignItems: "start",
            flexWrap: "wrap-reverse",
          }}
        >
          <Col xs={12} md={6}>
            <Col xs={12} className="py-md-0 py-3">
              <p
                className="desc"
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#c0c0c0",
                }}
              >
                {Text_Data.personal_info.field}
              </p>
            </Col>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-start justify-content-md-end"
          >
            <span>
              <Available_Job></Available_Job>
            </span>
          </Col>
        </Col>
        <Col
          xs={12}
          className="d-flex py-md-5 py-4"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap-reverse",
          }}
        >
          <Col xs={12} md={6}>
            <Col xs={12}>
              <h1 className="head pt-md-0 pt-3">
                {Text_Data.personal_info.name}
              </h1>
            </Col>
            <Col xs={12}>
              <p className="desc">{Text_Data.personal_info.description}</p>
            </Col>
            <Col sx={12} className="pt-3">
              <span>
                <Button variant="secondary">
                  <span>Hire me</span>
                  <span>+</span>
                </Button>
              </span>
            </Col>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <span
              className="profile-background d-flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="d-flex profile-background-inner">
                <img src="../profile.png" alt="" />
              </span>
            </span>
          </Col>
        </Col>
      </div>
    </>
  );
}

export default Home;
