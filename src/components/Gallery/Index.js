import React from 'react'
import {GalleryContainer, Background, Section} from './GalleryElements'
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Paper} from "@material-ui/core"
import Image from "../../images/3stado.jpg";
import Image2 from "../../images/project_three_edited.png";
import Image3 from "../../images/project_two_edited.png";
import Image4 from "../../images/restaurant.png";
import Image5 from "../../images/cefica.png";
import "./Gallery.css";

const useStyles = makeStyles((theme) => ({
    grid:{
        width: '100%',
        margin: '0px',
    },
    paper:{
        textAlign: 'center',
    },

}));

const Gallery = () => {

    const classes = useStyles();


    return (

        <Background>
            
        <GalleryContainer id={'gallery'} >

            <Grid container spacing={2} className='grid-container'style={{backgroundColor:'#161616'}}>
                <Grid item xs={12} sm={12} className='grid' style={{backgroundColor:''}}>
                    <Paper className='paper' style={{backgroundColor:'transparent'}} >
                        <img src={Image} height='30%' width='100%' alt="" ></img>
                    </Paper>
                </Grid>

                <Grid item xs={12}sm={6} >
                    <Paper className={classes.paper} style={{backgroundColor:'transparent'}}>
                        <img src={Image4} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} style={{backgroundColor:'transparent'}}>
                        <img src={Image3} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} style={{backgroundColor:'transparent'}}>
                        <img src={Image2} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} style={{backgroundColor:'transparent'}}>
                        <img src={Image5} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>
            </Grid>
                
        </GalleryContainer>

        <Section/>
        </Background>

    )
}

export default Gallery