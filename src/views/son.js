import React from "react";

export default class Son extends React.Component {
  input1 = React.createRef();
  input2 = React.createRef();
  constructor(props) {
    super(props);
  }
  state = {
    isHot: true,
  };
  showData = () => {
    console.log(this.input1.current.value);
  };
  show2Data = () => {
    console.log(this.input2.value);
  };
  changeState = () => {
    this.setState((state) => ({
      isBff: !state.isBff,
    }));
  };
  savaInput = (c) => {
    this.input2 = c;
    console.log(111);
    // 文档中说此种形式不影响，用内联形式即可
  };
  render() {
    const { isHot } = this.state;
    return (
      <div>
        <h2 onClick={this.changeState}>天气很{isHot ? "炎热" : "凉爽"}</h2>
        <input
          ref={this.input1}
          type="text"
          placeholder="点击按钮提示数据"
        ></input>
        <button onClick={this.showData}>点我提示左侧的数据</button>
        {/*<input
          onBlur={this.show2Data}
          ref={(c) => {
            this.input2 = c;
            console.log(111);
          }}
          type="text"
          placeholder="失去焦点提示数据"
        />*/}
        <input
          onBlur={this.show2Data}
          ref={this.savaInput}
          type="text"
          placeholder="失去焦点提示数据"
        />
      </div>
    );
  }
}
