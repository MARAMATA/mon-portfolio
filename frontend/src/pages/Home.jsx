import React from "react";
import { FaFileDownload, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

// Composant pour l'effet d'écriture lettre par lettre avec paramètres personnalisables
const TypewriterText = ({
  text,
  className = "",
  style = {},
  stagger = 0.1,
  letterDuration = 0.2,
}) => {
  const letters = text.split("");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: letterDuration },
    },
  };

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block", ...style }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Home = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/hero-bg.jpg') no-repeat center center/cover",
        color: "#fff",
      }}
      data-aos="fade-in"
    >
      <motion.div
        className="text-center p-5 rounded"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 60, duration: 1 }}
      >
        {/* Titre avec animation rapide */}
        <h1 className="display-4 fw-bold mb-3">
          <TypewriterText
            text="Bienvenue sur mon Portfolio"
            stagger={0.1}
            letterDuration={0.2}
          />
        </h1>
        {/* Le reste du texte apparaît après un délai coordonné (~3s) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <p className="lead mb-4" style={{ textAlign: "center" }}>
            Je suis{" "}
            <TypewriterText
              text="Douanier"
              className="fw-bold text-warning"
              stagger={0.1}
              letterDuration={0.2}
            />{" "}
            et{" "}
            <TypewriterText
              text="Data Scientist"
              className="fw-bold text-info"
              stagger={0.1}
              letterDuration={0.2}
            />, passionné par l'analyse des données et l'optimisation des processus
            douaniers.
          </p>
          <hr className="my-4 border-light" />
          <p className="mb-4" style={{ textAlign: "center" }}>
            Grâce à mon expertise en intelligence artificielle et en réglementation
            douanière, j'aide à améliorer la <strong>gestion des flux commerciaux</strong>,
            la <strong>conformité</strong> et la <strong>détection des fraudes</strong>{" "}
            grâce à des solutions basées sur la <strong>Data science et l’IA</strong>.
          </p>
        </motion.div>
        <div className="d-flex justify-content-center">
          <motion.a
            href="/projects"
            className="btn btn-primary btn-lg me-3 d-flex align-items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaProjectDiagram className="me-2" /> Voir mes projets
          </motion.a>
          <motion.a
            href="/cv.pdf"
            download
            className="btn btn-light btn-lg d-flex align-items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaFileDownload className="me-2" /> Télécharger mon CV
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
