import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Navbar from "./components/navbar";
import Body from "./components/body/body";
import Articles from "./components/Articles/articles";
import ProtectedRoutes from "./routes/protectedRoutes";
import ArticalPlans from "./components/pages/ArticlePlans";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Login />} />

          <Route path="/articles" element={<ProtectedRoutes />}>
            <Route path="/articles" element={<Articles />} />
          </Route>

          <Route path="/articles-plans" element={<ArticalPlans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
