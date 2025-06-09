import React from 'react';

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          TuNombre
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 mt-2 p-4 rounded-lg overflow-hidden"
          >
            <li className="py-2">
              <a href="#about" onClick={() => setOpen(false)}>
                Sobre mí
              </a>
            </li>
            <li className="py-2">
              <a href="#projects" onClick={() => setOpen(false)}>
                Proyectos
              </a>
            </li>
            <li className="py-2">
              <a href="#contact" onClick={() => setOpen(false)}>
                Contacto
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}