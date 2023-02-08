import './App.css';
import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Dashboard from './components/Dashboard';
import welcomeback from './welcomeback.png';

function App(props) {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return loggedIn ? (
    <div className='App'>
      <ResponsiveAppBar />
      <header className='App-header'></header>
    </div>
  ) : (
    <div className='App'>
      <ResponsiveAppBar />
      <header className='App-header'>
        <img src={welcomeback} style={{ width: 400, height: 92, margin: 5 }} />
        <div className='content'>
          <div className='dashboard'>
            <Dashboard />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
