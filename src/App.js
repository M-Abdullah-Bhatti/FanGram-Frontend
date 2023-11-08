// import './App.css';
// import FeaturedCelebrity from './components/FeaturedCelebrity'
import CelebrityPage from "./pages/CelebrityPage";
import Login from "./components/Login/Login";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import Home from "./pages/Home";
// import CelebrityPage from "./pages/CelebrityPage";
import { Route, Routes } from "react-router-dom";
import CelebrityOrder from "./pages/CelebrityOrder";
import MyProfile from "./pages/MyProfile";
import OrderDelivery from "./pages/OrderDelivery";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/celebrity" element={<CelebrityPage />} />
        <Route path="/order" element={<CelebrityOrder />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/orderdelivery" element={<OrderDelivery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
