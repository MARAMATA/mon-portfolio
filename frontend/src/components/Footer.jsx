import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light text-center py-3 mt-4">
      <p>© {currentYear} Maramata DIOP. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
