import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"

const FormAddUser = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    //const [confirmed, setConfirmed] = useState("");

    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                surname: surname,
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                role: role

            });
            navigate("/users");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div>
            <h2 className="subtitle">Register</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveUser}>
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
                                <label className="label">Password</label>
                                <div className="control">
                                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='******' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Confirm Password</label>
                                <div className="control">
                                    <input type="password" className="input" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} placeholder='******' />
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
                                <div className="control">
                                    <button type="submit" className="button is-success ">Save</button>
                                    <Link to="/" className="button is-primary mb-2">Return</Link>

                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddUser