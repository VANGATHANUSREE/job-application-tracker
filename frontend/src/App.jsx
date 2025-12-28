import { useEffect } from "react";
import api from "./api";

function App() {
  useEffect(() => {
    api.get("jobs/")
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return <h1>Job Application Tracker</h1>;
}

export default App;
