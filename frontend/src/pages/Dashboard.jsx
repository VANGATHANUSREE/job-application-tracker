import { useRef } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Dashboard = () => {
  const jobListRef = useRef();

  return (
    <div className="container">
      <h1>Job Application Tracker</h1>

      <JobForm onAdd={() => jobListRef.current.fetchJobs()} />
      <JobList ref={jobListRef} />
    </div>
  );
};

export default Dashboard;
