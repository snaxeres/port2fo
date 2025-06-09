import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Enrique Alegre. Todos los derechos reservados.
      </div>
    </footer>
  );
}