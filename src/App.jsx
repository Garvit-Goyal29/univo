import { Routes, Route } from "react-router-dom";
import Sideb from "./components/Sideb";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Sgpac from "./components/Sgpac";
import Cgpac from "./components/Cgpac";
import Cgpap from "./components/Cgpap";
import Notes from "./components/Notes";
import Bmic from "./components/Bmic";

function App() {
  return (
    <div className="flex flex-row justify-center min-h-screen w-full">
      <div className="hidden md:block md:w-1/5">
        <Sideb />
      </div>
      <div className="w-full md:w-4/5 h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sgpac" element={<Sgpac />} />
          <Route path="/cgpac" element={<Cgpac />} />
          <Route path="/cgpap" element={<Cgpap />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/bmi" element={<Bmic />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
