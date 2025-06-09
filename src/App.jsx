import React from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}