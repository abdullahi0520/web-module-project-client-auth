import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';


function App() {
  const isLoggedIn = localStorage.getItem('token')
  return (
    
    <div className="App">
      <h2>Client Auth Project</h2>
      <header>
          <Link className='links' to='/login'>Login</Link>
          <Link className='links' to='/friends'>Friends List</Link>
          <Link className='links' to='/friends/add'>Add Friends</Link>
          <Link className='links' to='/logout'>Logout</Link>
      </header>
      <Switch>
        <PrivateRoute exact path='/friends' component={FriendsList}/>
        <Route exact path='/login' component={Login}/>
        <PrivateRoute exact path='/friends/add' component={AddFriends}/>
        <Route exact path='/' component={Login}/>
        <Route exact path='/logout' component={Logout}/>
      </Switch>
    </div>
  );
}

export default App;
