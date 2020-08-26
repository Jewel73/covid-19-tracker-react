import React from 'react';
import styles from './cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

import {Card, CardContent, Grid, Typography } from '@material-ui/core'
// {confirmed, recovered, deaths, lastUpdate}
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }})=>{
    console.log(confirmed);
    
    if(!confirmed){
        return "LOADING................."
        
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item componet={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="h5"> 
                            <CountUp
                                start={0}
                                end = {confirmed.value}
                                separator=","
                                duration={3}
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of Active Cases Of Covid 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item componet={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary">Recoverd</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end = {recovered.value}
                                separator=","
                                duration={2.5}
                            />
                         </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of recoverd Cases Of Covid 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item componet={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary">Deaths</Typography>
                        <Typography variant="h5"> 
                            <CountUp
                                start={0}
                                end = {deaths.value}
                                separator=","
                                duration={2}
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of Death Cases Of Covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;