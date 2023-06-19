import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Navbar from "./components/navbar";
import Body from "./components/body/body";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
