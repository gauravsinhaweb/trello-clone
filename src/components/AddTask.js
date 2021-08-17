import { useState } from "react";

const AddTask = () => {
  const [description, setDescription] = useState(null);

  return (
    <div>
      <form autoComplete="off">
        <h4>Add a New Task</h4>

        <div>
          <div>
            <label htmlFor="newTaskTitle">Title:</label>
            <input maxLength="45" required type="text" name="newTaskTitle" />
          </div>

          <div>
            <div className="">
              <label htmlFor="priority">Priority: </label>
              <select name="priority" defaultValue="low">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="newTaskDescription">Description (optional):</label>
          <textarea
            name="desc"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button>Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
