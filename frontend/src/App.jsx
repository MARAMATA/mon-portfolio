import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// Ajout de Lazy Loading pour optimiser le chargement des pages
import { Suspense, lazy } from "react";

// Chargement différé des pages lourdes
const LazyAdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const LazyUserDashboard = lazy(() => import("./pages/UserDashboard"));

function App() {
  return (
    <Provider store={store}> {/* Intégration Redux */}
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Suspense fallback={<div className="text-center">Chargement...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute requiredRole="admin">
                    <LazyAdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute requiredRole="user">
                    <LazyUserDashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;