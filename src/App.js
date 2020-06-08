import React from 'react';
import Login from './Login';
import Repos from './Repos';

function App() {
  return (
    <div>
      {
        window.localStorage.getItem("code")
        ?
          <Repos />
        :
          <Login />
      }
    </div>
  )
}

export default App;
