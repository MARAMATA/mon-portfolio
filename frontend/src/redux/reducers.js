import {
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE
  } from "./actions";
  
  // État initial du store Redux
  const initialState = {
    loading: false,
    projects: [],
    error: ""
  };
  
  // Réducteur pour gérer les projets
  const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PROJECTS_REQUEST:
        return { ...state, loading: true, error: "" };
      case FETCH_PROJECTS_SUCCESS:
        return { loading: false, projects: action.payload, error: "" };
      case FETCH_PROJECTS_FAILURE:
        return { loading: false, projects: [], error: action.payload };
      default:
        return state;
    }
  };
  
  export default projectReducer;