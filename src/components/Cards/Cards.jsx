import React from 'react';
import styles from './cards.module.css'

import {Card, CardContent, Grid, Typography } from '@material-ui/core'
// {confirmed, recovered, deaths, lastUpdate}
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}})=>{
    console.log(recovered.value)

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item componet={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="h5"> Real Data</Typography>
                        <Typography color="textSecondary" gutterBottom>Real Date</Typography>
                        <Typography variant="body2">Number Of Active Cases Of Covid 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item componet={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Recoverd</Typography>
                        <Typography variant="h5"> Real Data</Typography>
                        <Typography color="textSecondary" gutterBottom>Real Date</Typography>
                        <Typography variant="body2">Number Of recoverd Cases Of Covid 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item componet={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Deaths</Typography>
                        <Typography variant="h5"> Real Data</Typography>
                        <Typography color="textSecondary" gutterBottom>Real Date</Typography>
                        <Typography variant="body2">Number Of Death Cases Of Covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;