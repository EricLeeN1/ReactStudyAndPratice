import React from 'react';

export default class Life extends React.Component {
  componentDidMount(){
    console.log('页面挂载完毕');
  }
  componentWillUnmount(){
    console.log('页面将要卸载');
  }
  // 初始化渲染，状态更新渲染
  render() {
    return (
      <div>123123</div>
    )
  }
}