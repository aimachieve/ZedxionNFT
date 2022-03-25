// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Box, Button, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import { LandingBlogs1 } from 'components/_external-pages/landing';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // padding: theme.spacing(8, 0),
  background: '#010101',
  color: '#ffffff'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'left',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
  }
}));
// ----------------------------------------------------------------------

export default function List() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          {/* List */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid
              container
              spacing={2}
            >
              {
                [...Array(12)].map((value, index) => (
                  <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
                      <CardMedia
                        component="img"
                        alt="NFT"
                        height="auto"
                        image={ 
                          index + 1 < 10 ?
                          `https://shreethemes.in/superex/layouts/images/blog/0${index + 1}.jpg` :
                          `https://shreethemes.in/superex/layouts/images/blog/${index + 1}.jpg`
                        }
                      />
                      <CardContent>
                        <Stack direction="row">
                          <EventNoteIcon />
                          <Typography sx={{
                            color: "#b9c6d8",
                            mr: 2
                          }}>
                            20th January, 2022
                          </Typography>
                          <ScheduleIcon />
                          <Typography sx={{
                            color: "#b9c6d8"
                          }}>
                            5 min read
                          </Typography>
                        </Stack>
                        <Typography gutterBottom variant="h5" component="div">
                          Mindfulness Activities for Kids & Toddlers with NFT
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Stack direction="row" justifyContent="space-between" spacing={18}>
                          <Button size="small" endIcon={<ArrowForwardIcon />} variant="text" href="#">Read More</Button>
                          <Button size="small" variant="text" href="#">by@callyjoe</Button>
                        </Stack>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>

            {/* Loading button */}
            <Button variant="contained" sx={{ color: 'white', mt: 5, ml: '50%' }}> 
              Load More 
              <img src="/assets/loading.gif" alt="loading" style={{width: '20px', color: 'white'}} />
            </Button>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
