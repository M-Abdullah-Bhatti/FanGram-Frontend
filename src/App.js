// import './App.css';
// import FeaturedCelebrity from './components/FeaturedCelebrity';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
      {/* <FeaturedCelebrity /> */}
      </Routes>
    </div>
  );
}

export default App;
