import React from "react";
import { Pagination } from "@mantine/core";
import { SettingsContext } from "../../context/settings/Settings";
import { useContext } from "react";
import './list.scss'

const PaginationSlider = () => {
  const state = useContext(SettingsContext);
  return (
    <div>
      <Pagination
      className="pagination"
        value={state.page}
        onChange={state.setPage}
        total={10}
        color="violet"
      />
    </div>
  );
};

export default PaginationSlider;
