import ToDo from "./ToDo";

export default function ToDoList({ toDoList,handleToggle,handleFilter }) {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />;
      })}
      <button onClick={handleFilter}>Delete Completed</button>
    </div>
  );
}
