import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Pricing from "./Sections/Pricing";
import Solutions from "./Sections/Solutions";
import Portfolio from "./Sections/Portfolio";
import Steps from "./Sections/Steps";

function App() {
  return (
    <div style={{ backgroundColor: "var(--navy)", color: "white" }}>
      <Navbar />
      <main
        className="px-5"
        style={{
          background:
            "linear-gradient(17deg, rgba(3, 3, 3, 1) 0%,  rgba(119, 97, 75, 0.95) 50%, rgba(5, 2, 2, 1) 100%)",
        }}
      >
        <Hero />
        <Features />
        <Solutions />
        <Portfolio />
        <Pricing />
        <Steps />
      </main>
      <Footer />
    </div>
  );
}

export default App;
