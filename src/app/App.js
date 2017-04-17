import React from 'react';
import './App.css';
import LockboxTableView from '../components/LockboxTableView';
import ShowPasswordsButton from '../components/actions/ShowPasswordsButton';
import SearchFilter from '../components/actions/SearchFilter'
import NewItemButton from '../components/actions/NewItemButton'

const App = () => {
  const spacing = 10;
  return (
  <div className="App" style={{ marginTop: spacing, marginLeft: spacing }}>
    <div style={{ marginBottom: spacing }}>
      <SearchFilter style={{ marginRight: spacing }}/>
      <NewItemButton style={{ marginRight: spacing }}/>
      <ShowPasswordsButton style={{ marginRight: spacing }}/>
    </div>
    <LockboxTableView />
  </div>
)};

export default App;
