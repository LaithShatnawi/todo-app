import React from "react";
export const SettingsContext = React.createContext();

const Settings = (props) => {
  const state = {
    items: 3,
    hide: true,
  };
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default Settings;
