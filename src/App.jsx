import { useEffect, useState} from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Nav/SignUp.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import HomePage from "./HomePage.jsx";

function App() {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
   axios.get("https://language-learning-platform.onrender.com/api/users")
   .then(res => console.log(res.data))
   .catch(error => console.log(error))
  },[])







  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
