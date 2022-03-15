// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
// import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LayersIcon from '@mui/icons-material/Layers';
// 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));
// ----------------------------------------------------------------------

export default function LandingBlogs2() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={3}>
              <Typography sx={{
                fontSize: '40px',
              }}>Latest Blogs</Typography>
              <Typography sx={{
                color: "#b9c6d8"
              }}>
                We are a huge marketplace dedicated to connecting great artists of all Zedxion <br /> with their fans and unique token collectors!
              </Typography>
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid
              container
            >
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/blog/01.jpg"
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
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/blog/02.jpg"
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
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/blog/03.jpg"
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
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
