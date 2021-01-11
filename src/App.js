import './App.css';
import AddTodo from './component/addTodo';
import TodoList from './component/todolist';

function App() {
  return (
    <div className="App">
     <h1>ToDo List</h1>
    <AddTodo/>
    <TodoList/>
    </div>
  );
}

export default App;
