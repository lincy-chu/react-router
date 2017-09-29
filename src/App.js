import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import PreventingTransitions from './components/PreventNav';
import NotMatch from './components/NotMatch';
import Sidebar from './components/SideBar';
import Animation from './components/Animation';
import Ambiguous from './components/Ambiguous';
import RouteConfig from './components/RouterSetting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Router>
            <div>
                <ul>
                    <li><Link to="/PreventingTransitions">阻止导航</Link></li>
                    <li><Link to="/NotMatch">未匹配</Link></li>
                    <li><Link to="/Sidebar">侧边栏</Link></li>
                    <li><Link to="/Animation">动画</Link></li>
                    <li><Link to="/Ambiguous">模糊匹配</Link></li>
                    <li><Link to="/RouteConfig">路由匹配</Link></li>
                </ul>
                <hr/>
                <Route path="/PreventingTransitions" component={PreventingTransitions}/>
                <Route path="/NotMatch" component={NotMatch}/>
                <Route path="/Sidebar" component={Sidebar}/>
                <Route path="/Animation" component={Animation}/>
                <Route path="/Ambiguous" component={Ambiguous}/>
                <Route path="/RouteConfig" component={RouteConfig}/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
