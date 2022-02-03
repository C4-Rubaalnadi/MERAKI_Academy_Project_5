import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Dashboard from "./components/dashboard";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
