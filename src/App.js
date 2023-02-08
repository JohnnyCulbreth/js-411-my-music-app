import './App.css';
import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import OutlinedCard from './components/Dashboard';

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
        <h2>Welcome back!</h2>
        <div className='content'>
          <div className='cards'>
            <div className='displaycard'>
              <OutlinedCard />
            </div>
            <div className='displaycard'>
              <OutlinedCard />
            </div>
            <div className='displaycard'>
              <OutlinedCard />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
