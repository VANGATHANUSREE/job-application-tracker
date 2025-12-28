import api from "../api/axios";

const JobCard = ({ job, refreshJobs }) => {
  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;

    await api.patch(`jobs/${job.id}/`, {
      status: newStatus,
    });

    refreshJobs();
  };

  const handleDelete = async () => {
    await api.delete(`jobs/${job.id}/`);
    refreshJobs();
  };

  return (
    <div className="card">
      <h4>{job.company_name}</h4>
      <p>{job.role}</p>

      {/* STATUS DROPDOWN */}
      <select value={job.status} onChange={handleStatusChange}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      {/* DELETE BUTTON */}
      <button
        onClick={handleDelete}
        style={{ marginTop: "10px", background: "#ef4444" }}
      >
        Delete
      </button>
    </div>
  );
};

export default JobCard;
