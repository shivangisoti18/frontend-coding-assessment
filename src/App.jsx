import {useState} from 'react';

import FilterBar from './components/FilterBar';
import SearchBar from './components/SeachBar';
import {userData} from './components/Users';
import {userList} from './components/USerList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

function App() {

  return (
    <Router>
      <div className="app">
       <SearchBar serach={search}
        onSearch={handleSearch}
        />
        <FilterBar  setFilter={setFilter}/>
        <UserList users={filterUsers}/>
        <Routes>
          {/* Routes will be added during interview */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
