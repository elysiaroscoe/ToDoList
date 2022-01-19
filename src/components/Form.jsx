import React, {useState} from 'react';

const Form = (props) => {
    console.log("props from Form.jsx", props);
    const [task, setTask] = useState("");

    const sendForm = (e) => {
        e.preventDefault();
        const newTask = {
            //task from state, from form
            action: task,
            completed: false
        }
        props.addTask(newTask);
        // props.addTask({action: newTask, completed: false});
        setTask("");
    }

    const handleTask = (e) => {
        setTask(e.target.value)
        // console.log(task);
    }

    return (
    <div>
        <form onSubmit = {sendForm}>
            <label>Add Task: {task}</label>
            <input type="text" onChange = {handleTask} value = {task}/>
            <button>Add Task</button>
        </form>
    </div>
)};

export default Form;
