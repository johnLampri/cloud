import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoCartOutline, IoBag } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const {user} =useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  }

  return (
    <div> <aside className="menu pl-4 has-shadow">
      <p className="menu-label">
        General
      </p>
      <ul className="menu-list">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            More
          </a>

          <div className="navbar-dropdown">
            <a className="navbar-item">
              <li><NavLink to={"/dashboard"}><IoHome />Dashboard</NavLink></li>
            </a>
            <a className="navbar-item">
              <li><NavLink to={"/products"}><IoPricetag />seller</NavLink></li>

            </a>
            <a className="navbar-item">
              <li>
                <NavLink to={"/users"}><IoPerson />Administration</NavLink>
              </li>
            </a>
            <a className="navbar-item">
              <li>
                <NavLink to={"/cart"}><IoCartOutline />Cart</NavLink>
              </li>
            </a>
            <a className="navbar-item">
              <li>
                <NavLink to={"/buy"}><IoBag />products</NavLink>
              </li>
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </ul>


      <p className="menu-label">
        Settings
      </p>
      <ul className="menu-list">
        <li><button onClick={logout} className="button is-white"><IoLogOut />Logout</button></li>
      </ul>



    </aside></div>
  )

}

export default Sidebar