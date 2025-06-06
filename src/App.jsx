import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Body from "./pages/Body";

function App() {
  return (
    <>
      <div className="mx-3 transition-all duration-300 ">
        <Router>
          <Routes>
            <Route index path="/" element={<Body />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
