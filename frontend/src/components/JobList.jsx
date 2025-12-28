import { useEffect, useState } from "react";
import api from "../api/axios";
import JobCard from "./JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await api.get("jobs/");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default JobList;
