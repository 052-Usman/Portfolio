import "./available-job.scss";
import { Text_Data } from "../../assets/text-file";

function Available_Job() {
  const handleLinkClick = () => {
    window.open(Text_Data.personal_info.calendly, "_blank");
  };
  return (
    <>
      <div
        xs={12}
        className="available-job px-3 py-0 d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
        onClick={handleLinkClick}
        role="button"
      >
        <span className="d-block small-circle"></span>
        <p className="ms-2">AVAILABLE FOR JOB</p>
      </div>
    </>
  );
}

export default Available_Job;
