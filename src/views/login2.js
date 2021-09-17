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
  saveUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  savePassword = (e) => {
    this.setState({
      password: e.target.value,
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
            onChange={this.saveUsername}
            placeholder="请输入用户姓名"
          ></input>
        </div>
        <div className="form-name">
          <input
            type="password"
            onChange={this.savePassword}
            placeholder="请输入用户密码"
          ></input>
        </div>
        <button type="submit">登录</button>
      </form>
    );
  }
}
