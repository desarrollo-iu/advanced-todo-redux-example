import { generateId } from '../utils/helpers';


export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: generateId(),
    text,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};
