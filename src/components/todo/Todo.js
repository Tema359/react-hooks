import React, { Component} from "react";
import "./Todo.css";


import PropTypes from "prop-types";
import Checkbox from "../checkbox/Checkbox";
import Button from '../button/Button'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  componentDidUpdate() {
    if(this.state.editing) {
      this.refs.title.focus()
      this.refs.title.select()
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let title = this.refs.title.value;

    this.props.onEdit(this.props.id, title)

    this.setState({editing: false})
  }

  renderDisplay() {
    return (
      <div className={`todo${this.props.completed ? ' completed' : ''}`}>
      <Checkbox checked={this.props.completed} onChange={() => this.props.onStatusChange(this.props.id)}/>

      <span className="todo-title">{this.props.title}</span>
      <Button className="edit icon" icon="edit" onClick={() => this.setState({editing:true})}/>
      <Button className="delete icon" icon="delete" onClick={() => this.props.onDelete(this.props.id)}/>
    </div>
    )
  }

  renderForm(){
    return (
    <form className="todo-edit-form" onSubmit={this.handleSubmit}>
      <input type="text" ref="title" defaultValue={this.props.title} className="change-inp" />
      <Button className="save icon" icon="save" type="submit" />
    </form>
    )
  }
  
  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay()
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

