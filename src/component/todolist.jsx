import React from 'react';
import { connect } from "react-redux";
import { getTodos } from "../redux/selector"; 
import { toggleTodo } from "../redux/actions/index"

const TodoList = (props) => {
    console.log(props)
        return (
            <div className="container m-2">
                <ul className="list-group">
                { props.todos && props.todos.length
                ? props.todos.map (todo => {
                return ( <li className="list-group-item"  key={todo.id}>
                    <input className="m-2" type="checkbox" onClick={()=>props.toggleTodo(todo.id)}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                      }}
                    ></input>
                    {todo.content}</li>)
                }):<h4>"No todos, yay!"</h4>}
            </ul>
            </div>             
         );
    };
 
export default connect(state=>({todos: getTodos(state)}), {toggleTodo})(TodoList);