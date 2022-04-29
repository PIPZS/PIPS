import React, {useEffect} from 'react'
import {GalleryContainer, GalleryTitle, Background} from './GalleryElements'
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Paper} from "@material-ui/core"
import Image from "../../images/3stado.jpg";
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
        <GalleryContainer id={'gallery'}>
            <GalleryTitle>GALERIA DE IMAGENES</GalleryTitle>
            <Grid container spacing={2} className='grid'>
                <Grid item xs={12}  className='paper' >
                    <Paper >
                        <img src={Image} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>
                <Grid item xs={4} >
                    <Paper className={classes.paper}>
                        <img src={'https://media.istockphoto.com/photos/man-getting-his-beard-trimmed-with-electric-razor-picture-id872361244?k=20&m=872361244&s=612x612&w=0&h=xacxRAgqgXGCN4BAp3dSPZq_jK_irb24I6nZM2P6mNU='} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>
                <Grid item xs={4} >
                    <Paper className={classes.paper}>
                        <img src={'https://st2.depositphotos.com/2931363/9695/i/600/depositphotos_96952024-stock-photo-young-handsome-man-in-barbershop.jpg'} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>
                <Grid item xs={4} >
                    <Paper className={classes.paper}>
                        <img src={'https://thumbs.dreamstime.com/b/hands-young-barber-making-haircut-to-attractive-man-barbershop-bearded-74338525.jpg'} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <img src={'https://cdn.create.vista.com/api/media/medium/161543432/stock-photo-barber-drying-hair-of-customer?token='} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.paper}>
                        <img src={'https://thumbs.dreamstime.com/b/ajuste-perfecto-en-la-barber%C3%ADa-65608345.jpg'} height='30%' width='100%' alt=""></img>
                    </Paper>
                </Grid>
            </Grid>
                
        </GalleryContainer>
        </Background>

    )
}

export default Gallery