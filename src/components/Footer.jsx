import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, Typography} from '@material-ui/core';
import logo from "../assets/logo.svg";


export default function Footer() {

    const useStyles = makeStyles((theme) => ({
        root: {},
        container: {}
    }))

    const classes = useStyles();

    return (
        <Typography component="footer" className={classes.root} >
            <Container className={classes.container}>
                <Grid container>
                    <Grid item>
                    <img src={logo} alt="Snippets Codebase Logo" />
                    </Grid>
                </Grid>
            </Container>
        </Typography >
    )
}
