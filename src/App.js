// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Todos} from './components/Todos'
import {Footer} from './components/Footer'
import {Addtodo} from './components/Addtodo'
import {About} from './components/About'
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let init;
  if(localStorage.getItem("todos") === null){
    init = [];
  }else{
    init = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (title,desc) => {
    console.log(title,desc);
    let sno;
    if(todos.length === 0){
      sno =0;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    const mytodo = {
      sno : sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,mytodo]);
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log(mytodo);
  }
  const onDelete = (todo) => {
    console.log('deleted',todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e)=>{  
      return e!==todo;
    }))

  }
  const [todos, setTodos] = useState(init);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <>
    <Router>
      <Header title="To Do List" showSearch={false}/>
      <Switch>
          <Route exact path="/" render={() => {
            return(
              <>
                 <Addtodo addTodo={addTodo}/>
                  <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
