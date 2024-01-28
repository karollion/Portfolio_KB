import { createStore } from 'redux';
import initialState from './initialState';

//selectors
export const getLanguage  = (state) => state.language;
export const getAbout  = (state) => state.about;
export const getAllProjects = (state) => state.projects;
export const getAllExperience = (state) => state.experience;
export const getAllEducation = (state) => state.education;
export const getSkills = (state) => state.skills;
export const getTechnologies = (state) => state.technologies;

// action creators


const reducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;