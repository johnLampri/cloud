import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
const FormEditUser = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const [confirmed, setConfirmed] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users/' + id);
                setName(response.data.name);
                setSurname(response.data.surname);
                setUsername(response.data.username);
                setEmail(response.data.email);
                setPassword(response.data.password);
                setconfirmPassword(response.data.confirmPassword);
                setRole(response.data.role);
                setConfirmed(response.data.confirmed);


            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg)
                }
            }
        }
        getUserById();
    }, [id])


    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch('http://localhost:5000/users/'+ id, {
                name: name,
                surname: surname,
                username: username,
                email: email,
                role: role,
                confirmed: confirmed
            });
            navigate("/users");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div><h1 className="title">Users</h1>
            <h2 className="subtitle">Update User</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateUser}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Surname</label>
                                <div className="control">
                                    <input type="text" className="input" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='Surname' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">username</label>
                                <div className="control">
                                    <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Role</label>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                                            <option value="productseller">Product Seller</option>
                                            <option value="user">User</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Confirmed</label>
                                <div className="control">
                                    <select value={confirmed} onChange={(e) => setConfirmed(e.target.value )}>
                                        <option value="true" > 1</option>
                                        <option value="false" >0</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success ">Update</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEditUser