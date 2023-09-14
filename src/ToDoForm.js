import { useState } from "react";

export default function ToDoForm({addTask}){
    const [userInp,setUserInp] = useState('');

    const handleChange = (e) => {
        setUserInp(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInp);
        setUserInp("");
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            value={userInp}
            type="text"
            onChange={handleChange}
            placeholder="Enter task.."
          />
          <button>Submit</button>
        </form>
      </>
    );
}