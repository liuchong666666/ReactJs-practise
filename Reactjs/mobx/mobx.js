import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './index.module.scss';
import { observable, computed, toJS } from 'mobx';
import { observer, inject, Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
state = {
  name: 'c',
};

class B extends React.Component {
  render() {
    return <div>{this.props.user.age}</div>;
  }
}
class C extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
/*
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleDec = countt => {
    countt--;
    this.setState({
      count: countt,
    });
  };
  handleInc = countt => {
    countt++;
    this.setState({
      count: countt,
    });
  };
  render() {
    return (
      <div>
        Counter:{this.state.count}
        <br />
        <button onClick={() => this.handleDec(this.state.count)}>-</button>
        <button onClick={() => this.handleInc(this.state.count)}>+</button>
      </div>
    );
  }
}
*/

/*
const appState = observable({
  count: 0,
});
appState.increment = function() {
  this.count++;
};
appState.decrement = function() {
  this.count--;
};
@observer
class Counter extends React.Component {
  // @observable count = 0;
  render() {
    return (
      <div>
        <DevTools noPanel />
        Counter:{appState.count}
        <br />
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
      </div>
    );
  }
  handleInc = () => {
    appState.count++;
  };
  handleDec = () => {
    appState.count--;
  };
}
export default Counter;
*/



class User{
  @observable age = 24;//3.@observable 全局mobx变量
  @userInfo = {};//4.自定义的mobx变量,如果要修改，就必须在action方法里面修改，这样全部使用这个mobx变量的地方才能同时改变
  @computed get dsd() {//5.计算属性，mobx变量修改的时候，如果需要计算 ，就用这个。
    return this.age + 'dsadasdsa';
  }
  @action//6.方法 ：修改mobx变量
  fn() {
    this.userInfo = {
      name: 'qzz',
      age:24
    }
  }
  @action
  changeAge(age) {
    this.age = age
  }
}
@inject('user')//1.在props中注入一个mobx变量，在组件内用this.props.user就可以使用 ，当然组件内的变量最好不要和这个重名
@observer//2.监听组件，如果要是上面注入的mobx变量在某一处修改了让全部使用这个mobx变量的地方都变的话，就要让组件前面使用@observer
class A extends React.Component {
  state = {
    name: 'b',
  };
  click = () => {
    let { changeAge } = this.props.user;//使用mobx定义的方法
    changeAge(123);//调用方法及传参
  }
  render() {
    let { age} = this.props.user;//使用mobx注入的变量
    toJS(user).name;//将mobx变量格式化，可以直接调用，而不需要遵循mobx格式调方法来获得相应数据
    return <div>{age}</div>;
  }
}
//Provider  mobx关联各个组件 这样才会有用
// user:注入的变量，new User():变量对应的值
// <A/>：A组件
<Provider store={user:new User()}>
  <A/>
</Provider>
