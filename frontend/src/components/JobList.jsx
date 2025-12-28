import { useEffect, useState } from "react";
import api from "../api/axios";
import JobCard from "./JobCard";
import JobForm from "./JobForm";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await api.get("jobs/");
      setJobs(res.data);
    } catch (error) {
      alert("❌ Failed to fetch jobs. Please login via admin.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <JobForm refreshJobs={fetchJobs} />

      <h3>My Job Applications</h3>

      <div className="grid">
        {jobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              refreshJobs={fetchJobs}
            />
          ))
        )}
      </div>
    </>
  );
};

export default JobList;
