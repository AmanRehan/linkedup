import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {

  const { user, status, moreInitialProp } = useSelector(selectUser); // Destructuring the state data from the userSlice of redux store. 

  console.log(user, status, moreInitialProp);
  return (
    <div className="app">
      <Header />

      {!user && (<Login />)}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
