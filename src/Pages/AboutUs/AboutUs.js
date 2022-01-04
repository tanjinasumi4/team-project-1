import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import './AboutUs.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import about1 from '../../images/about/about1.png';
import about3 from '../../images/about/about3.png';
import about4 from '../../images/about/about4.png';
import about5 from '../../images/about/about5.jpg';
import bannerBg from '../../images/about/About-Us.jpg';
import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';

const aboutBg = {
    background: `url(${bannerBg})`,
    // backgroundColor:'rgb(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    // marginTop: 175
    height: 500,
    backgroundPosition: ' center'
}

const AboutUs = () => {
    return (
        <>
            <Navigation></Navigation>
            <Box style={aboutBg}>
            </Box>
            <Container className='aboutstyle' sx={{my:5}}>
                <Typography sx={{ mb: 4, color: "info.main" }}variant="h4" gutterBottom component="div">
                    Unique & Stylist Fashion
                    <br />
                    We Are An Awesome Agency.
                    
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    We are highly organised and motivated professional Fashion Designer with a wealth of experience in a range of photographic styles and services. Just run your Fashion Store which will be a reflection of you a sexy and confident woman that shines with her unique style. Our goal is to make fashion as easy possible. We bring you the best of glam and sexy clothes while keeping in mind that high quality things arent always too expensive. Our goal is to make fashion as easy as possible, that is why we add carefully selected products on a daily basis, and this is essential for us. This is how you keep up with the times in style! We ship worldwide & space!
                </Typography>
                <Button sx={{my:3}} variant="outlined">Read More ...</Button>
            </Container>

            <Container sx={{my:10}}>
                <Grid container spacing={2}>
                    <Grid sx={{mt:4}} item xs={12} md={6}>
                        <Typography sx={{ my: 4 ,color:'secondary.main'}} variant="h5" gutterBottom component="div">
                            OUR STORY
                        </Typography>
                        <Typography sx={{ mb: 4,color:"info.main" }} variant="caption" display="block" gutterBottom>
                           <span sx={{color:'info.main'}}>---</span> THE HIGH STRESS FAVOUTIRE
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
Swiss-made quality at reasonable prices is the name of the game at Tissot, which has been making old-school mechanical watches in Le Locle, Switzerland since 1853. Whatever your style, you’re likely to find something you want in their extensive catalog spanning pocket watches, pro-quality dive watches and classic ‘60s chronographs.
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                        Swatch changed the game in the early 1980s by proving that Switzerland could make inexpensive quartz (i.e. battery-powered) watches as well as high-end mechanical ones. Forty years later they’re still at the top of their game, producing multiple collections every year in their signature colorful-quirky style.
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img width="100%" src={about1} alt="" />
                       
                    </Grid>
                    
                </Grid>

            </Container>
            <Container sx={{ my: 10 }}>
                <Typography className='aboutstyle' sx={{textAlign:'center',my:5}} variant="h4">
                    Behind The Brands
                </Typography>
                <Typography sx={{textAlign:'center',my:5}} variant="body1">
                    We are a female-founded, 100% woman-led team of collaborative dreamers who value innovation, curiosity and free-thinking fearlessness in everything that we do. We take immeasurable pride in our work, intentionally stitching love into the very fiber and fabric of our designs. We are small, but we are a mighty group of talented individuals dedicated to bringing you otherworldly designs with imagery to match.
                </Typography>
                <Typography sx={{textAlign:"center",color:'info.main',my:4}}>
                    ________________________________________
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img src={about3} alt="" />
                        <Typography sx={{textAlign:'center',color:'secondary.main'}} variant="h6">
                            Karen ryan
                        </Typography>
                        <Typography sx={{ textAlign: 'center', color: 'info.main' }} variant="body1">
                           Designer
                        </Typography>
            
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={about4} alt="" />
                        <Typography sx={{ textAlign: 'center', color: 'secondary.main' }} variant="h6">
                            Karen ryan
                        </Typography>
                        <Typography sx={{ textAlign: 'center', color: 'info.main' }} variant="body1">
                            Designer
                        </Typography>
            
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={about5} alt="" />
                        <Typography sx={{ textAlign: 'center', color: 'secondary.main' }} variant="h6">
                            Diksha Sharma
                        </Typography>
                        <Typography sx={{ textAlign: 'center', color: 'info.main' }} variant="body1">
                            Developer
                        </Typography>
            
                    </Grid>
                    
                </Grid>

            </Container>
            <Footer></Footer>
           
       
        </>
    );
};

export default AboutUs;