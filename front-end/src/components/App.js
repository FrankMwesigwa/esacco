import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';

import Header from './common/Header';
import SideBar from './common/SideBar';
import Dashboard from './common/Dashboard';

import BatchList from './batch/BatchList';

class App extends Component {

  render() {
    return (
      <body class="hold-transition skin-blue sidebar-mini">
      <div class="wrapper">
      <Header />
      <aside class="main-sidebar">
        <SideBar />
      </aside>
      <div class="content-wrapper">
        <Switch>
          <Route exact path="/home"  component={Dashboard}/>
          <Route exact path="/batch" exact component={BatchList}/>
          <Redirect from="/" to="/home"/>
        </Switch>
      </div>
      

<footer class="main-footer">
<div class="pull-right hidden-xs">
  <b>Version</b> 1.1.0
</div>
<strong>Copyright &copy; 2018 <a href="">Housing Finance Bank</a>.</strong> All rights
reserved.
</footer> 
 
  </div>
      </body>
      
    );
  }
}



export default App;

