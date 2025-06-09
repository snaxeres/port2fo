import React from 'react';

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Proyecto Pagina de gym fitness",
      description: "Its a project of html and css, with a responsive design and a simple navigation structure. The objective is to create an online store of fitness services. The requirement was to use html and css, and to implement a responsive design.",
      github: "https://snaxeres.github.io/EntregaFinal-commerce/",
      demo: "#",
      tech: ["React", "Node.js"],
    },
    {
      title: "Proyecto ecommerce con JavaScript",
      description: "Project of ecommerce developed with JavaScript, using libraries such as sweetalert2, and bootstrap. The objective is to create an online store of grow products. A responsive design and a simple navigation structure are implemented. The project includes functionalities such as shopping cart, form validation, and event handling.",
      github: "https://snaxeres.github.io/EntregaFinal-G.e-commerce/",
      demo: "#",
      tech: ["JavaScript", "Express"],
    },
    {
      title: "Proyecto React Commerce",
      description: "Project of ecommerce developed with react, using libraries such as react-router-dom, react-icons, react-toastify, and react-bootstrap. The objective is to create an online store of grow products. A responsive design and a simple navigation structure are implemented.",
      github: "https://github.com/snaxeres/EntregaFinal-React-commerce",
      demo: "#",
      tech: ["React", "MongoDB"],
    },
    {
      title: "Proyecto Backend basico con Node.js, Express y MongoDB",
      description: "Project of basic backend developed with Node.js, Express, and MongoDB. The objective is to create a RESTful API that allows performing CRUD operations on a product database. Basic authentication and error handling are implemented.",
      github: "https://github.com/snaxeres/EntregaFinal-Back-2",
      demo: "#",
      tech: ["Next.js", "TailwindCSS"],
    },
    {
      title: "Proyecto Backend estructura y arquitectura con Node.js, Express y MongoDB, jwtToken y bcrypt",
      description: "Project of backend developed with Node.js, Express, and MongoDB, implementing jwtToken and bcrypt for authentication and security. The objective is to create a RESTful API that allows performing CRUD operations on a product database. Basic authentication and error handling are implemented.",
      github: "https://github.com/snaxeres/EntregaFinal-Back-commerce",
      demo: "#",
      tech: ["TypeScript", "GraphQL"],
    },
    {
      title: "Proyecto tienda de adopcion de mascotas backend",
      description: "Proyecto de tienda de adopciones realizado con backend utilizando vistas, auntenticacion, manejo de errores. Login y registro de usuarios, testeo y documentado. Dockerizado.Project of pet adoption store developed with backend using views, authentication, error handling. Login and user registration, testing and documentation. Dockerized.",
      github: "https://github.com/snaxeres/FinBack3nd",
      demo: "#",
      tech: ["React Native", "Firebase"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-16 text-cyan-700 drop-shadow-md">Mis Proyectos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, github, demo, tech }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="mb-10 text-center text-lg text-cyan-900 font-semibold">{title}</h3>
              <p className="flex-grow mb-4 text-gray-700">{description}</p>
              <div className="mb-4">
                {tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-cyan-200 text-cyan-800 text-xs px-2 py-1 rounded mr-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 flex items-center gap-2"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-500"
                >
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}