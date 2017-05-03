import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.filter !== prevProps.filter){
      this.fetchData();
    }
  }

  fetchData() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    );
  }

  render() {
    return <TodoList {...this.props} />
  }
}

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
    receiveTodos: (todos) => {
      dispatch(receiveTodos(todos));
    }
  };
};

VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);

export default VisibleTodoList;
