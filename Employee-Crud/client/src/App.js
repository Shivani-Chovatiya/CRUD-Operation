import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import CodeforInterview from "./components/CodeforInterview";
import AllUser from "./components/AllUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* <Route path="/" element={<CodeforInterview />} /> */}
          <Route path="/all" element={<AllUser />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
