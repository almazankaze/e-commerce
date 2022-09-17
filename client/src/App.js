import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/errors/NotFound";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/navbar/SideBar";

import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
