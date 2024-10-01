import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';
import Maptodo from './components/Maptodo';

function App() {
  const[todo,setTodo]=useState([]);
  const propsplate=(jamil)=>{
    console.log("====",jamil)
    setTodo([...todo,jamil])
  }
  const deletarray=(key)=>{
    let aaaaa=[...todo]
    aaaaa.splice(key)
    setTodo([...aaaaa])
  }
  return (
    <div className="App">
     <Todo propsplate={propsplate}/>
     {todo.map((item,index)=>{
      return(
        <>
        <Maptodo item={item} index={index} key={index} deletarray={deletarray}/>
        </>
      )
     })}
    </div>
  );
}

export default App;
