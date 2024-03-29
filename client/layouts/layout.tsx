import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import Player from "../components/Player";


const Layout: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '100px 0'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default Layout;