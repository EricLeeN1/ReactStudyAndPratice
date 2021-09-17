import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault(); // 组织表单默认提交
    console.log(this.state);
  };
  saveStates = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };
  render() {
    return (
      <form
        ref={this.loginRef}
        action="http://localhost:3000/"
        method="post"
        onSubmit={this.handleSubmit}
      >
        <div className="form-name">
          <input
            type="text"
            name="username"
            onChange={(e) => this.saveStates(e, "username")}
            placeholder="请输入用户姓名"
          ></input>
        </div>
        <div className="form-name">
          <input
            type="password"
            name="password"
            onChange={(e) => this.saveStates(e, "password")}
            placeholder="请输入用户密码"
          ></input>
        </div>
        <button type="submit">登录</button>
      </form>
    );
  }
}
