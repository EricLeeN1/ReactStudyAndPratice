import React from "react";

export default class Login extends React.Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault(); // 组织表单默认提交
    console.log(this.usernameRef.current.value);
    console.log(this.passwordRef.current.value);
  };
  render() {
    return (
      <form
        action="http://localhost:3000/"
        method="post"
        onSubmit={this.handleSubmit}
      >
        <div className="form-name">
          <input
            ref={this.usernameRef}
            type="text"
            placeholder="请输入用户姓名"
          ></input>
        </div>
        <div className="form-name">
          <input
            ref={this.passwordRef}
            type="password"
            placeholder="请输入用户密码"
          ></input>
        </div>
        <button type="submit">登录</button>
      </form>
    );
  }
}
