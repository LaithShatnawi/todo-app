import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import App from "./app.jsx";

class Main extends React.Component {
  render() {
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
