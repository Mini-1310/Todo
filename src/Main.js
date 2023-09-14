import { useState } from "react";


import data from "./data.json";

import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

export default function ToDoApp() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((list) => {
      return !list.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInp) => {
    let copy = [...toDoList];
    copy = [...copy,{id: toDoList.length + 1,task: userInp, complete:false}];
    setToDoList(copy)
  }
  return (
    <>
      <div className="App">
        <ToDoList
          toDoList={toDoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
          
        />
        <ToDoForm addTask={addTask}/>
      </div>
    </>
  );
}
