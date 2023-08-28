import React from "react";
import "./app.scss";

import ToDo from "./components/todo/Todo.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Settings from "./context/settings/Settings";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Settings>
          <div className="app">
            <div className="box">
              <img
                src="https://images.unsplash.com/photo-1692678420673-ba7a27ad70cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                alt=""
                className="imgBackground"
              />
              <div className="shade"></div>
            </div>
            <Header />
            <ToDo />
            <Footer />
          </div>
        </Settings>
      </>
    );
  }
}
