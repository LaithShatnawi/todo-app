import { useEffect } from "react";
import useForm from "../../hooks/form.jsx";
import "./todo.scss";
import { SettingsContext } from "../../context/settings/Settings";
import { useContext } from "react";
import List from "../list/List.jsx";

const ToDo = () => {
  const state = useContext(SettingsContext);

  const { handleChange, handleSubmit } = useForm(
    state.addItem,
    state.defaultValues
  );

  useEffect(() => {
    let incompleteCount = state.list.filter((item) => !item.complete).length;
    state.setIncomplete(incompleteCount);
    document.title = `To Do List: ${state.incomplete}`;
  }, [state]);
  return (
    <div className="todoContainer">
      <header>
        <h1>To Do List: {state.incomplete} items pending</h1>
      </header>
      <div className="contain">
        <form onSubmit={handleSubmit} className="form">
          <h2>Add To Do Item</h2>

          <label className="input_box">
            <input
              onChange={handleChange}
              name="text"
              type="text"
              placeholder="Item Details"
            />
            <span>To Do Item</span>
          </label>

          <label className="input_box">
            <input
              onChange={handleChange}
              name="assignee"
              type="text"
              placeholder="Assignee Name"
            />
            <span>Assigned To</span>
          </label>

          <label className="input_box">
            <input
              onChange={handleChange}
              defaultValue={state.defaultValues.difficulty}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
            <span>Difficulty</span>
          </label>

          <label>
            <button type="submit" className="addButton">
              Add Item
            </button>
          </label>
        </form>
        <div className="tasksContain">
          <List />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
