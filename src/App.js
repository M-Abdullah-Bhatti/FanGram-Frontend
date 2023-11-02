// import './App.css';
// import FeaturedCelebrity from './components/FeaturedCelebrity';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <FeaturedCelebrity /> */}
      </Routes>
    </div>
  );
}

export default App;
