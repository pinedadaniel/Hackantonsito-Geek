import React from 'react';
import NavBar from '../components/NavbarComponent';
import SideBar from '../components/SideBarComponent';

const Layout = (props) =>{
    return(
        <React.Fragment>
            <SideBar/>
            
            {props.children}
        </React.Fragment>
    )

}

export default Layout;