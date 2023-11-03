import { Route, Routes } from "react-router-dom";

// ! Page
import Home from "./Pages/Home";
import Accommodation from "./Pages/Accommodation";
import EatAndDrink from "./Pages/EatAndDrink";
import ClassicCollection from "./Pages/ClassicCollection";
import DeluxeCollection from "./Pages/DeluxeCollection";
import SuiteCollection from "./Pages/SuiteCollection";
import Restaurants from "./Pages/Restaurants";
import SeeAndDo from "./Pages/SeeAndDo";

// ! Component
import Header from "./Components/Header";

// ! Style Sheet
import "./scss/App.css";

// TODO : Content Card Slider
// ToDo: link underline animation
// TODO: InfoCard flex wrap
// TODO: Replace images with smaller file size

// 밑줄 애니메이션
// https://www.youtube.com/watch?v=O54PjSD9BUg

// Done : HighlightA Img Resize
// Done : CarouselB Text Area Resize

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route
          path="/accommodation/classic-collection"
          element={<ClassicCollection />}
        />
        <Route
          path="/accommodation/deluxe-collection"
          element={<DeluxeCollection />}
        />
        <Route
          path="/accommodation/suite-collection"
          element={<SuiteCollection />}
        />
        <Route path="/eatAndDrink" element={<EatAndDrink />} />
        <Route path="/eatAndDrink/restaurants" element={<Restaurants />} />
        <Route path="/seeAndDo" element={<SeeAndDo />} />
      </Routes>
    </div>
  );
}

export default App;
