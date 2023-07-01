import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";


const Layout: React.FC = ({children}) => {
    return (
        <Container style={{margin: '100px 0'}}>
            <Navbar/>
            {children}
        </Container>
    );
};

export default Layout;