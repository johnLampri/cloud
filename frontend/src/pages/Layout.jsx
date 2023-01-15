import React from 'react'
import Navbar from '../components/NavBar'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="columns mt-6"  style={{miHeight: "10vh"}}>
                <div className="colum is-2"><Sidebar /></div>
                    <div className="column has-background-light">
                    <main>{ children}</main>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Layout