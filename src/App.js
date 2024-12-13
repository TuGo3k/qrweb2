import logo from "./logo.svg";
import "./App.css";
import "swiper/css"; // Import Swiper styles
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FoodList } from "./components/FoodList";
import { BeerList } from "./components/BeerList";
import { CocktailsList } from "./components/CocktailsList";
import { ShootersList } from "./components/ShootersList";
import { ShotsList } from "./components/ShotsList";
import { WinesList } from "./components/WinesList";
function App() {
  // if(){

  // }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/food" element={<FoodList />} />
          <Route path="/beer" element={<BeerList />} />
          <Route path="/shots" element={<ShotsList />} />
          <Route path="/wines" element={<WinesList />} />
          <Route path="/shooters" element={<ShootersList />} />
          <Route path="/cocktails" element={<CocktailsList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
