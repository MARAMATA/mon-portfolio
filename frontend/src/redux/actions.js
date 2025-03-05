import axios from "axios";

// Définition des types d'actions
export const FETCH_PROJECTS_REQUEST = "FETCH_PROJECTS_REQUEST";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE";

// URL de base pour l'API (ajuste cette valeur pour Railway)
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api";

// Action pour récupérer les projets depuis l'API
export const fetchProjects = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PROJECTS_REQUEST });
    
    try {
      const response = await axios.get(`${API_URL}/projects/`);
      dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_PROJECTS_FAILURE, payload: error.message });
    }
  };
};