import React from "react";
import reactDom from "react-dom";

export default class Count extends React.Component {
  constructor(props) {
    super(props);
    console.log("构造器");
    this.state = { count: 0 };
  }
  // 组件已经挂载的钩子
  componentDidMount() {
    console.log("componentDidMount");
  }
  // 组件将要挂载的阀门
  componentWillMount() {
    console.log("componentWillMount");
  }
  // 控制组件更新的钩子
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  // 组件将要更新的钩子
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  // 组件更新完成的钩子
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  update = () => {
    // 不受控制
    this.forceUpdate();
  };
  death = () => {
    reactDom.unmountComponentAtNode(document.getElementById('test'));
  }
  render() {
    console.log("render");
    return (
      <div>
        <h2 id="test">当前求和为{this.state.count}</h2>
        <p onClick={this.add}>点我+1</p>
        <p onClick={this.death}>移除组件</p>
        <p onClick={this.update}>强制</p>
      </div>
    );
  }
}
