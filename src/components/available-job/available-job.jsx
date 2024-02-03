import "./available-job.scss";

function Available_Job() {
  return (
    <>
      <div
        xs={12}
        className="available-job px-3 py-0 d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <span className="d-block small-circle"></span>
        <p className="ms-2">AVAILABLE FOR JOB</p>
      </div>
    </>
  );
}

export default Available_Job;
