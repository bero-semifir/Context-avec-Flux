import React from 'react'

export const UserList = ({ data, handleDelete }) => {
    return (
        <ul>
            {data.map(user => <li key={user._id}>{user.name} {user._id}<button onClick={() => handleDelete(user)}>{user._id}</button></li>)}
        </ul>
    )
}
