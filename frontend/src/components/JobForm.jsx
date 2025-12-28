import { useState } from "react";
import api from "../api/axios";

const JobForm = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("jobs/", {
      company_name: company,
      role: role,
      applied_date: new Date().toISOString().split("T")[0],
    });

    setCompany("");
    setRole("");
    window.location.reload();
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
      <button>Add</button>
    </form>
  );
};

export default JobForm;

