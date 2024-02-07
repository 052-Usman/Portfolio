import { Row, Col, Button } from "react-bootstrap";
import toast from "react-hot-toast";

import "./home.scss";
import { Text_Data } from "../../assets/text-file";
import Available_Job from "../../components/available-job/available-job";
import RecentWork from "../../components/recent-work/recent-work";
import Specialist from "../../components/specialist/specialist";

function Home() {
  const copyEmailToClipboard = () => {
    const email = Text_Data.personal_info.email;
    navigator.clipboard.writeText(email).then(
      () => {
        toast.success("Email copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const navigateToCalendly = () => {
    const calendly_url = Text_Data.personal_info.calendly;
    window.open(calendly_url, "_blank");
  };

  return (
    <>
      <div
        xs={12}
        className="div1-back d-flex"
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
            <Col sx={12} className="pt-3 d-flex">
              <div className="btn-hire-me" onClick={navigateToCalendly}>
                <div className="text">Hire me</div>
                <div className="line"></div>
                <div className="sign">
                  <img src="./plus-icon.svg" alt="" />
                </div>
              </div>
              <div className="btn-copy-email">
                <div className="text">Copy Email</div>
                <div className="line"></div>
                <div className="sign" onClick={copyEmailToClipboard}>
                  <img src="./copy-icon.svg" alt="" />
                </div>
              </div>
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
      <div xs={12}>
        <Col
          xs={12}
          className="d-flex"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div className="div2-back">
            <RecentWork></RecentWork>
          </div>
          <div className="div2-back">
            <Specialist></Specialist>
          </div>
        </Col>
      </div>
    </>
  );
}

export default Home;
