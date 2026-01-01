import { useState } from 'react'
import List from './List';

function ToDoList() {

    const [tasks, setTasks] = useState(["Walk the dog", "Wash the dishes", "Fold clothes"]);
    const [newTask, setNewTask] = useState("");


    function handleTaskChange(event) {
        setNewTask(event.target.value)
    }

    function handleAddTask() {
        setTasks(t => [...t, newTask])
        setNewTask("")
    }

    function deleteTask(index) {
        const updatedTask = tasks;
        setTasks(updatedTask.filter((_, i) => i !== index))
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];

            // formula for swapping the tasks
            [updatedTask[index], updatedTask[index - 1]] = 
            [updatedTask[index - 1], updatedTask[index]];

            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];

            // formula for swapping the tasks
            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1], updatedTask[index]];

            setTasks(updatedTask);
        }
    }

    return(
        <section className='to-do-list'>
            <div className='container'>
                <h1>To Do List</h1>

                <input type="text" placeholder='Add task...' value={newTask} onChange={handleTaskChange}/>
                <button onClick={handleAddTask}>Add task</button>

                <ol>
                    {tasks.map((task, index) => <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>👆</button>
                        <button onClick={() => moveTaskDown(index)}>👇</button>
                    </li>)}
                </ol>
            </div>
        </section>
    );
}
export default ToDoList