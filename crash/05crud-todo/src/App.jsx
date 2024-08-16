
import { useState } from 'react';

function App() {
  let [list, setList] = useState([]);
  let [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskName: newTask,
      completed:false,
    };
    let newList = [...list, task];
    setList(newList);
  };

  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  };
  function completed(taskId){
    const updateList=list.map((task)=>{
      if(task.id===taskId){
       return {...task, completed:true}
      }
      else return task
    })
    setList(updateList)
}

  return (
    <>
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {list.map((task) => {
          return (
            <div key={task.id} style={{backgroundColor: task.completed===true?"green":"red"}}>
              <h1>{task.taskName}</h1>
              <button onClick={()=>{completed(task.id)}}>completed</button>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

