import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Body from "./pages/Body";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[1400px] px-4 transition-all duration-300">
        <Router>
          <Routes>
            <Route index path="/" element={<Body />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
