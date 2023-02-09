import './App.css';
import React, { useState, createContext } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Dashboard from './components/Dashboard';
import welcomeback from './welcomeback.png';
import Login from './components/Login';

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

function App(props) {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {loggedIn ? (
        <div className='App'>
          <ResponsiveAppBar />
          <header className='App-header'>
            <Login />
          </header>
        </div>
      ) : (
        <div className='App'>
          <ResponsiveAppBar />
          <header className='App-header'>
            <img
              src={welcomeback}
              style={{ width: 400, height: 92, margin: 5 }}
            />
            <div className='content'>
              <div className='dashboard'>
                <Dashboard />
              </div>
            </div>
          </header>
        </div>
      )}
    </LoginContext.Provider>
  );
}

export default App;
