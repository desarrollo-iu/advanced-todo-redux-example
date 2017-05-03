import * as api from '../api';

const requestTodos = () => {
  return {
    type: 'REQUEST_TODOS'
  }
}
const receiveTodos = (filter, response) => {
  return {
    type: 'RECEIVE_TODOS',
    filter,
    response
  }
}
export function fetchTodos(filter) {
  return function (dispatch) {
    dispatch(requestTodos())
    return api.fetchTodos(filter)
      .then(todos =>
        dispatch(receiveTodos(filter, todos))
      )
  }
}

export const addTodo = (text) => (dispatch) =>
	api.addTodo(text).then(response => {
		dispatch({
			type: 'ADD_TODO_SUCCESS',
			response,
		});
	});


// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter,
//   };
// };

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};
