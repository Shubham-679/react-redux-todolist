import React, { Component } from "react";
import { connect } from 'react-redux';
import { addtodo } from '../redux/actions/index';

class AddTodo extends Component {
  state = {
    input : ""
  };
  handleChange = (input) => {
    this.setState({input})
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addtodo(this.state.input)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input className="m-2" type="text" onChange={e=> this.handleChange(e.currentTarget.value)} value={this.state.input}/>
          <button className="btn btn-primary m-2" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, {addtodo})(AddTodo);
