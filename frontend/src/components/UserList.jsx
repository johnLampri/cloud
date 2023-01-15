import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const UserList = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getUsers();
  }, [])
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  }

  const deleteUser = async (userId) => {
    await axios.delete("http://localhost:5000/users/" + userId);
    getUsers();
  };


  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Surname</th>
            <th>username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Confirmed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1 }</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.confirmed | 0}</td>
              <td>
                <Link to={'/users/edit/' + user.id}
                  className="button is-small is-info">
                  Edit
                </Link>
                <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">Delete</button>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}

export default UserList