import React from "react";
import { Pagination } from "@mantine/core";
import { SettingsContext } from "../../context/settings/Settings";
import { useContext } from "react";

const PaginationSlider = () => {
  const state = useContext(SettingsContext);
  return (
    <div>
      <Pagination value={state.items} onChange={state} total={state.items} />;
    </div>
  );
};

export default PaginationSlider;
