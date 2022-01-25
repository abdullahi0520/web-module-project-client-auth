import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';


function App() {
  const isLoggedIn = localStorage.getItem('token')
  return (
    
    <div className="App">
      <h2>Client Auth Project</h2>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends List</Link>
          <Link to='/friends/add'>Add Friends</Link>
          

        </li>
      </ul>
      <Switch>
        <Route exact path='/friends' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        <Route path='/friends/add' component={AddFriends}/>
        <Route path='/' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
