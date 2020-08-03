import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import Index from './index'
import './app.scss';

/**
 * 异步加载外部 JavaScript
 */
function loadScript(url: string, callback: () => void, props?: { [key: string]: any }) {
  const script = document.createElement('script');
  script.onload = () => callback();
  script.src = url;
  if (props) {
    // eslint-disable-next-line
    for (const prop in props) {
      if (Object.prototype.hasOwnProperty.call(props, prop)) {
        script[prop] = props[prop];
      }
    }
  }
  document.body.appendChild(script);
}

if (Taro.getEnv() !== 'WEAPP') {
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/vConsole/3.3.4/vconsole.min.js', () => {
    // eslint-disable-next-line
    new VConsole();
  });
}

class App extends Component {

  UNSAFE_componentDidMount () {}

  UNSAFE_componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

export default App;
// Taro.render(<App />, document.getElementById('app'))
