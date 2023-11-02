// import './App.css';
// import FeaturedCelebrity from './components/FeaturedCelebrity';
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <Header />      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <FeaturedCelebrity /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
