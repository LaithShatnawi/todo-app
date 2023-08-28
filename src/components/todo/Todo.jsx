import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.jsx";
import "./todo.scss";
import { SettingsContext } from "../../context/settings/Settings";
import { useContext } from "react";

import { v4 as uuid } from "uuid";

const ToDo = () => {
  const state = useContext(SettingsContext);

  const [defaultValues] = useState({
    difficulty: 3,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <div className="todoContainer">
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

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
            defaultValue={defaultValues.difficulty}
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
        {list.map((item) => (
          <div key={item.id} className="task">
            <p className="text">{item.text}</p>
            <p>
              <small>
                Assigned to: <b>{item.assignee}</b>
              </small>
            </p>
            <p>
              <small>Difficulty: {item.difficulty}</small>
            </p>
            <div
              onClick={() => toggleComplete(item.id)}
              className="checkContain"
            >
              Complete: <div className="red"></div>
              {item.complete.toString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
