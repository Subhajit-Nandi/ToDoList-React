import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import About from './MyComponents/About';
import AddTodo from './MyComponents/AddTodo';
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {

  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header title="LIST" searchBar={true} />
        <Routes>
          <Route path="/" element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }> </Route>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
