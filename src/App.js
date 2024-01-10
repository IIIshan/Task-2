import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Contact from "./components/Contact";

import { createContext, useState } from "react";
export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );

  return (
    <>
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
        </Router>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
