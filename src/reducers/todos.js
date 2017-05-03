import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  if(action.response) {
    return {
      ...state,
      ...action.response.entities.todos,
    };
  }
  return state;
};

const createList = (filter) => {
	return (state = [], action) => {
		switch (action.type) {
      case 'RECEIVE_TODOS':
        return filter === action.filter ?
          action.response.result :
          state;
      case 'ADD_TODO_SUCCESS':
        return filter !== 'completed' ?
          [...state, action.response.result] :
          state;
			default:
				return state;
		}
	}
};

const idsByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const todos = combineReducers({
  byId,
  idsByFilter,
});

export default todos;

//Selectors

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};
