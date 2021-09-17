import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import Son from './views/son';
import Login from './views/login2';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  state = {
    logo: logo,
    isBff: false,
  };

  // 对标签属性进行类型、必要性的限制
  static propTypes = {
    name: PropTypes.string.isRequired, // 限制name必传，且为字符串
    // sex: PropTypes.number.isRequired, // 限制sex为字符串
    age: PropTypes.number.isRequired, // 限制age为数值
    // speak: PropTypes.number.isRequired, // 限制speak为函数
  };

  // 指定默认标签属性值
  static defaultProps = {
    name: "张三", // sex默认值为'张三'
    age: 18,
  };

  changeState = () => {
    this.setState((state) => ({
      isBff: !state.isBff,
    }));
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.logo} className="App-logo" alt="logo" />
          <Login></Login>
          <p onClick={this.changeState}>
            {this.props.name} <code>src/App.js</code> and save to reload.{" "}
            {this.state.isBff ? "炎热" : "寒冷"}
          </p>
          <p>年龄：{this.props.age}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Son />
        </header>
      </div>
    );
  }
}

export default App;
