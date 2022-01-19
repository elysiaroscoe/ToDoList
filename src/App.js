import React, {useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([
    {action: "Do the dishes", completed: false},
    {action: "Laundry", completed: false}
  ]);

  //Create
  const addTask = (newTask) =>{
    console.log("addTask function adding new task", newTask);
    const copyList = [...todoList];
    copyList.push(newTask);
    setTodoList(copyList);
  };

  //Update Completion
  const updateTask = (idx) => {
    const copyList = [...todoList];
    copyList[idx].completed = !copyList[idx].completed;
    setTodoList(copyList);
  }


  //Delete Task
  const deleteTask = (deleteIdx) => {
    console.log("app.js deleteTask function", deleteIdx);
    //use filter to select all tasks without the deleteIdx and re-array them
    const everythingButTheDelete = todoList.filter((t, idx) => idx !== deleteIdx ? true : false)
    setTodoList(everythingButTheDelete)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      {JSON.stringify(todoList)}
      <Form addTask = {addTask}/>

    {
      todoList.map((task,idx) =>{
        return(
          <List 
            task = {task}
            key = {idx}
            index = {idx}
            deleteTask = {deleteTask}
            updateTask = {updateTask}
            />
        )
      })
    }
    </div>
  );
}

export default App;
