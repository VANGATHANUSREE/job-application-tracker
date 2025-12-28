import { useState } from "react";
import api from "../api/axios";

const JobForm = ({ refreshJobs }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("jobs/", {
        company_name: company,
        role: role,
        applied_date: new Date().toISOString().split("T")[0],
      });

      setCompany("");
      setRole("");
      refreshJobs(); // refresh list immediately
    } catch (error) {
      alert("❌ Failed to add job. Are you logged in?");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Add Job</h3>

      <input
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />

      <button>Add Job</button>
    </form>
  );
};

export default JobForm;
