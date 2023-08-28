import React from "react";
export const ThemeContext = React.createContext();
export default class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "red",
      toggleMode: this.toggleMode,
    };
  }
  toggleMode = () => {
    this.setState({
      mode: this.state.mode === "red" ? "green" : "red",
    });
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
