import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import "./App.css";

import PropTypes from "prop-types";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
import Form from './components/form/Form'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.initialData,
    };
  }


  nextId() {
    this._nextId = this._nextId || 4;
    return this._nextId++;
  }

  handleStatusChange = (id) => {
    let todos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState({todos: todos})
  }

  handleDelete = (id) => {
    let todos = this.state.todos.filter(todo => todo.id !== id)

    this.setState({todos: todos})
  }

  handleAdd = (title) => {
    let todo = {
      id: this.nextId(),
      title: title,
      completed: false
    }
    let todos = [...this.state.todos, todo]

    this.setState({todos: todos})
    
  }

  handleEdit = (id, title) => {
    let todos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.title = title
      }
      return todo
    })
    this.setState({todos:todos})
  }

  render() {
    return (
      <div className="app">
        <main>
          <Header title={this.props.title} todos={this.state.todos}/>
          <ReactCSSTransitionGroup 
            component="section" 
            className="todo-list"
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}>
            {this.state.todos.map(todo =>
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onStatusChange={this.handleStatusChange}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            )}
          </ReactCSSTransitionGroup>

          <Form  onAdd={this.handleAdd}/>
        </main> 
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  initialData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

App.defaultProps = {
  title: "React Todo",
};
