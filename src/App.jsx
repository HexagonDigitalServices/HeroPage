import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from './components/Hero'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Hero/>
      {/* Your main content here */}
      <Footer isDarkMode={darkMode} />
    </>
  );
}

export default App;