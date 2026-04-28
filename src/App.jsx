import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import FilterBar from './components/FilterBar.jsx';
import UserList from './components/UserList.jsx';
import { users } from './components/Users';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSearch = (value) => {
    setSearch(value);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase());
    
    const matchesFilter = 
      filter === 'all' || 
      user.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app">
      <h1>User Management</h1>
      
      <SearchBar 
        search={search} 
        onSearch={handleSearch} 
      />
      
      <FilterBar 
        filter={filter} 
        setFilter={setFilter} 
      />
      
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
