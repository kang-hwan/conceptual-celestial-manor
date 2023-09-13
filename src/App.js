import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import "./scss/App.css";
import Accommodation from "./Pages/Accommodation";
import EatAndDrink from "./Pages/EatAndDrink";
import ClassicCollection from "./Pages/ClassicCollection";
import DeluxeCollection from "./Pages/DeluxeCollection";
import SuiteCollection from "./Pages/SuiteCollection";

// TODO: Fix large logo size

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
      </Routes>
    </div>
  );
}

export default App;
