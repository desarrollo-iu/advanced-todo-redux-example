import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';

import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(
      state,
      ownProps.filter
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
