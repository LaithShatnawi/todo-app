import React from "react";
export const SettingsContext = React.createContext();
import { useState } from "react";

const Settings = (props) => {
  const [page, setPage] = useState(1);
  const state = {
    items: 3,
    hide: false,
    page: page,
    setPage: setPage,
  };
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default Settings;
