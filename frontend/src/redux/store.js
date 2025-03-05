import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import projectReducer from "./reducers";

// Combinaison des réducteurs
const rootReducer = combineReducers({
  projects: projectReducer
});

// Création du store avec Redux DevTools
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;