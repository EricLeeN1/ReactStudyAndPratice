import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: logo,
      isBff: false,
    };
    console.log(this);
    // 解决changeState中this指向问题
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState((state) => ({
      isBff: !state.isBff,
    }));
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.logo} className="App-logo" alt="logo" />
          <p onClick={this.changeState}>
            Edit <code>src/App.js</code> and save to reload.{" "}
            {this.state.isBff ? "炎热" : "寒冷"}
          </p> 
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
