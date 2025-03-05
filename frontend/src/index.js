import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { pdfjs } from "react-pdf";

// ✅ Configuration du worker PDF.js pour éviter les erreurs de chargement
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// ✅ Initialisation de AOS (Animations on Scroll)
AOS.init({
  duration: 1000,  // Temps d'animation en ms
  once: true,      // Animation se joue une seule fois
  easing: "ease-in-out",
});

// ✅ Création et rendu du root React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);