import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-50 to-white bg-transparent">
      <div className="bg-transparentcontainer mx-auto px-4 max-w-lg">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center mb-10 text-cyan-700 drop-shadow-md"
        >
          Contacto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-10 text-center text-lg text-cyan-900 font-semibold"
        >
          Si quieres contactarme, aquí tienes mis datos. ¡Será un placer conectar contigo!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(2,12,27,0.15)] border-2 border-cyan-100"
        >
          <ul className="flex flex-col gap-6 text-cyan-800 font-medium text-lg">
            <li className="flex items-center gap-4">
              <span className="text-2xl">📧</span>
              <a href="mailto:enriquealegreal@gmail.com" className="hover:underline" >
                enriquealegreal@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-2xl">📱</span>
              <a
                href="https://wa.me/541168908235"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +54 11 6890-8235
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-2xl">🔗</span>
              <a
                href="https://www.linkedin.com/in/enrii-alegre-ab9b45152/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/enrii-alegre-ab9b45152
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-2xl">💻</span>
              <a
                href="https://github.com/snaxeres"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/snaxeres
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

