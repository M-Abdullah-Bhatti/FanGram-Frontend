// import './App.css';
import Login from "./components/Login/Login";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
// import CelebrityPage from "./pages/CelebrityPage";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import {
  BookingDetails,
  BusinessPromotion,
  CelebrityOrder,
  CelebrityPage,
  Home,
  MyProfile,
  OrderDelivery,
} from "./pages";
import SearchCelebrity from "./pages/SearchCelebrity";
import ReviewModal from "./components/Modals/ReviewModal";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/review" element={<ReviewModal />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/celebrity/:id" element={<CelebrityPage />} />
        <Route path="/order/:id" element={<CelebrityOrder />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/orderdelivery" element={<OrderDelivery />} />
        {/* <Route path="/booking" element={<BookingDetails />} /> */}
        <Route path="/promotion" element={<BusinessPromotion />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/search" element={<SearchCelebrity />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
