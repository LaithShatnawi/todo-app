import PaginationSlider from "./PaginationSlider";
import { SettingsContext } from "../../context/settings/Settings";
import { useContext } from "react";
import "../todo/todo.scss";

const List = () => {
  const state = useContext(SettingsContext);

  const startIndex = (state.page - 1) * 3;
  const endIndex = startIndex + 3;

  return (
    <>
      {state.list
        .sort((a, b) => {
          return b.difficulty - a.difficulty;
        })
        .filter((item, index) => index >= startIndex && index < endIndex)
        .map(
          (item) =>
            item.hide && (
              <div key={item.id} className="task">
                <div className="checkContain">
                  <div
                    className={item.mode}
                    onClick={() => state.toggleComplete(item.id)}
                  >
                    {item.complete ? "Completed" : "Pending"}
                  </div>
                  <p>
                    <small>
                      <b>{item.assignee}</b>
                    </small>
                  </p>
                  <span
                    className="close"
                    onClick={() => state.closeHandle(item.id)}
                  >
                    X
                  </span>
                </div>
                <p className="text">{item.text}</p>
                <p className="difficulty">
                  <small>Difficulty: {item.difficulty}</small>
                </p>
              </div>
            )
        )}
      {state.list.length != 0 && <PaginationSlider />}
    </>
  );
};

export default List;
