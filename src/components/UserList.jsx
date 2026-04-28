import React from 'react';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <p className="no-results">No results found</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong>
          <span className={`status ${user.status}`}>{user.status}</span>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
