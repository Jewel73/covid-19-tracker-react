import React from 'react'
import styles from './creator.module.css'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import imageCreator from './jewel.jpg'
const Creator = ()=>{
    return (
        <div className="container">
            <CardContent>
                        <div className={styles.content}>
                            <div className={styles.jewel}>
                                <Avatar className={styles.image} src={imageCreator} alt=""/>
                                <div className={styles.text}>
                                    <Typography color="textPrimary">Zovan Ahamed</Typography>
                                    <Typography variant="h6" color="textSecondary">Covid-19-Tracker</Typography>
                                </div>
                            </div>
                            
                        </div>
                </CardContent>
        </div>
    )
}

export default Creator;