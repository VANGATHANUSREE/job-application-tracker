import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Job Application Tracker</h1>
      <JobForm />
      <JobList />
    </div>
  );
};

export default Dashboard;
