import api from "../api/axios";

const JobCard = ({ job, refreshJobs }) => {
  const handleStatusChange = async (e) => {
    try {
      await api.patch(`jobs/${job.id}/`, {
        status: e.target.value,
      });
      refreshJobs();
    } catch (error) {
      alert("❌ Failed to update status");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`jobs/${job.id}/`);
      refreshJobs();
    } catch (error) {
      alert("❌ Failed to delete job");
    }
  };

  return (
    <div className="card">
      <h4>{job.company_name}</h4>
      <p>{job.role}</p>

      <select value={job.status} onChange={handleStatusChange}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

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
