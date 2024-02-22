import { Row, Col } from "react-bootstrap";
import { Text_Data } from "../../assets/text-file";

import "./footer.scss";
import Available_Job from "../available-job/available-job";

function Footer() {
  return (
    <>
      <div
        xs={12}
        className="footer my-3 d-flex"
        style={{ justifyContent: "center", zIndex: 99, position: "relative" }}
      >
        <Col
          xs={12}
          className="desc d-flex"
          style={{ flexWrap: "wrap-reverse", alignItems: "center" }}
        >
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-center justify-content-md-start"
          >
            <p style={{ fontSize: "24px", marginBottom: "0px" }}>
              Portfolio 2024
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex py-md-0 py-2"
            style={{ justifyContent: "center" }}
          >
            <a
              className="mx-2 social"
              href={Text_Data.social.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="mx-2 social"
              href={Text_Data.social.instagram_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="mx-2 social"
              href={Text_Data.social.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <span>
              <Available_Job></Available_Job>
            </span>
          </Col>
        </Col>
      </div>
    </>
  );
}

export default Footer;
