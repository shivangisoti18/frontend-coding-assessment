import React from 'react';

const UserList =({users})=>{
    if(users.length=== 0){
            return <h1>No Result</h1>;
        }

    return(
        <>
        <ul>
            {users.map((user)=> {
                <li key ={user.id}>
                    <strong>{user.username}</strong> | {user.twitter} | {user.active ? "active" : "inactive"}
                    
                </li>
            })}
        </ul>
        
        </>
    )
}
export default  UserList;