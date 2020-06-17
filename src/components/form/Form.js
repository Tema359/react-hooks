import React, { Component } from 'react'
import './Form.css'


import PropTypes from 'prop-types'
import Button from '../button/Button'

export default class Form extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: ''
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    let title = this.state.title;
    if(title) {
      this.props.onAdd(title)
      this.setState({title: ''})
    }
  }

  handleChange = (event) => {
    let title = event.target.value;
    this.setState({title: title})
  }
  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input 
          placeholder="What is your new Todo?"
          className="add-inp"
          value={this.state.title}
          onChange={this.handleChange}
          />

        <Button type="submit" className="add-btn">
          Add Todo
        </Button>
      </form>
    )
  }
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired
}
