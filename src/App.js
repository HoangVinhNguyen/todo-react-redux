import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="container">
      <TopBar />
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
