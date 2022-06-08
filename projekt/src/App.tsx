import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailedPage from "./Components/Pages/DetailedPage";
import LandingPage from "./Components/Pages/LandingPage";
import { LoginPage } from "./Components/Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/movie/:id" element={<DetailedPage />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
