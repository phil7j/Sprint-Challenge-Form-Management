import React from 'react';
import Register from './components/Register'
import ViewData from './components/ViewData'
import './App.css';
import {Route, Link} from 'react-router-dom';
import {useLocalStorage} from './components/useLocalStorage';

function App() {
  const [token, setToken] = useLocalStorage('token', '')
  return (
    <div className="App">
       <div className="nav">
        <Link to="/">Register</Link>
        <Link to="/viewdata">View Data</Link>
        </div>
         <Route exact path="/" render={(props)=> <Register setToken={setToken} {...props} />} />
          <Route exact path="/viewdata" component={ViewData} />
    </div>
  );
}

export default App;
