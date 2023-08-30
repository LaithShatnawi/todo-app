import React from "react";
export const SettingsContext = React.createContext();
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Settings = (props) => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [defaultValues] = useState({
    difficulty: 3,
  });
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(0);
  const state = {
    items: numOfPages,
    page: page,
    setPage: setPage,
    list: list,
    setList: setList,
    incomplete: incomplete,
    setIncomplete: setIncomplete,
    defaultValues: defaultValues,
    addItem: addItem,
    deleteItem: deleteItem,
    toggleComplete: toggleComplete,
    closeHandle: closeHandle,
  };

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    item.mode = "red";
    item.hide = true;
    console.log(item);
    setList([...list, item]);
    if (list.length % 3 === 0) {
      setNumOfPages(numOfPages + 1);
    }
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
        item.mode = item.mode === "red" ? "green" : "red";
        item.hide = item.mode === "red" ? true : false;
      }
      return item;
    });
    if ((list.length % 3) - 1 === 0) {
      setNumOfPages(numOfPages - 1);
    }
    setList(items);
    deleteItem(id);
  }

  function closeHandle(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.hide = false;
      }
      return item;
    });
    if ((list.length % 3) - 1 === 0) {
      setNumOfPages(numOfPages - 1);
    }
    setList(items);
    deleteItem(id);
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default Settings;
