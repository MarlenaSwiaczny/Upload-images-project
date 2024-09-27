import React from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function Home() {
    return (<>
    <h2>Strona główna</h2>
    <Button 
        variant="contained"
        component={Link}
        to="/gallery"
        textAlign="right">Gallery <ArrowRightIcon />
        </Button>
    </>)
}


export default Home;