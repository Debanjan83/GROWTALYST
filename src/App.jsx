import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from "./components/pages/About"
import Work from './components/pages/Work'
import Contact from "./components/pages/Contact"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <Router>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
