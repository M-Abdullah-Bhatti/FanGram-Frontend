// import './App.css';
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import CelebrityPage from "./pages/CelebrityPage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <Header />      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/celebrity" element={<CelebrityPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
