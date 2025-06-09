import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "JavaScript", icon: "💻" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🛠️" },
    { name: "MongoDB", icon: "🗄️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Git", icon: "🔧" },
  ];

  return (
    <section id="about" className="py-20 bg-white/30 backdrop-blur-sm rounded-lg mx-4 md:mx-0">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-cyan-700 drop-shadow-md">
          Sobre Mí / About me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-2xl overflow-hidden border-4 border-cyan-600">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D35AQGz5QukGEfcLA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1711231373725?e=1750082400&v=beta&t=KMqKdE99JDWp5VX7WOwlASl_tMu1u768FewJ-J2c6ag"
                alt="Enrique Alegre"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-2/3 bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(2,12,27,0.15)] border-2 border-cyan-100"
          >
            <p className="text-lg mb-8 text-cyan-900 font-semibold leading-relaxed">
              Soy un desarrollador Fullstack con formación integral en tecnologías frontend y backend. Domino React, JavaScript, HTML y CSS para construir interfaces limpias, intuitivas y responsivas. En el backend, cuento con experiencia en Node.js, Express y MongoDB, así como en la implementación de autenticación segura utilizando JWT y bcrypt. He desarrollado proyectos completos que incluyen gestión de usuarios y funcionalidades completas de autenticación y autorización. Estoy entusiasmado por aplicar mis conocimientos en un entorno profesional desafiante donde pueda seguir creciendo y aportando valor.
            </p>
            <p className="text-lg text-cyan-700 font-medium leading-relaxed">
              I am a Fullstack developer with comprehensive training in both frontend and backend technologies. I specialize in React, JavaScript, HTML, and CSS to build clean, intuitive, and responsive user interfaces. On the backend, I have experience with Node.js, Express, and MongoDB, as well as secure authentication implementations using JWT and bcrypt. I have developed full-featured projects including user management and authentication/authorization functionalities. I am eager to apply my skills in a challenging professional environment where I can continue growing and adding value.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-cyan-50 p-6 rounded-xl shadow-lg flex items-center gap-4 cursor-pointer transition-transform duration-300"
            >
              <span className="text-4xl">{skill.icon}</span>
              <h3 className="text-xl font-semibold text-cyan-800">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
