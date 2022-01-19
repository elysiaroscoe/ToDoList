import React, {useState} from 'react';

const List = (props) => {
    console.log("Props from List.jsx", props);
    const { task } = props;


    return (
        <div style = {{
            height: "50px",
            width: "250px",
            display: "flex",
            textDecoration: task.completed ? "line-through" : ""
        }}>

            
            <p> {task.completed ? "Done!" : "Need to do!"} </p>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={()=> props.updateTask(props.index)}
            />
            <p> {task.action} </p>
            <button onClick={() => props.deleteTask(props.index)}>Delete Task</button>







            {/* {
                task.map( (item, idx) => {
                    return(
                        <div key = {idx} style={{display: "flex"}}>
                            <input type="checkbox" checked={item.completed} onChange={() => console.log(idx)}/>
                            <p>Task: {item.action}</p>
                        </div>
                    )
                }
                ) 
            } */}
        </div>
    )
};

export default List;
