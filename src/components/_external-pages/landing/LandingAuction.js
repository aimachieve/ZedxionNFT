// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
// 
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// 
import Avatar from '@mui/material/Avatar';
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

export default function LandingAuction() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={3}>
              <Typography sx={{
                fontSize: '40px',
              }}>Live Auctions</Typography>
              <Typography sx={{
                color: "#b9c6d8",
                textAlign: 'center'
              }}>
                We are a huge marketplace dedicated to connecting great artists of all Zedxion <br /> with their fans and unique token collectors!
              </Typography>
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid
              container
              spacing={2}
            >
              <Grid item xs={12} md={3}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white', p: 3 }}>
                  <Stack direction={'row'} alignItems="center" spacing={2} mb={3}>
                    <Avatar src="https://shreethemes.in/superex/layouts/images/client/01.jpg"
                      alt="avartar"
                      sx={{ width: '40px', height: '40px' }}
                    />
                    <Typography sx={{ fontSize: '20px' }}>@Butterfly</Typography>
                  </Stack>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/items/3.jpg"
                    sx={{ borderRadius: "10px" }}
                  />
                  <Typography gutterBottom variant="h5" component="div" mt={3}>
                    Liquid Forest Princess
                  </Typography>
                  <Stack direction={'row'} justifyContent="space-between">
                    <Stack>
                      <Typography>Current Bid:</Typography>
                      <Typography sx={{ color: "#1066e7" }}>20.5ETH</Typography>
                    </Stack>
                    <Fab color="primary" aria-label="add">
                      <ShoppingBagIcon />
                    </Fab>
                  </Stack>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white', p: 3 }}>
                  <Stack direction={'row'} alignItems="center" spacing={2} mb={3}>
                    <Avatar src="https://shreethemes.in/superex/layouts/images/client/02.jpg"
                      alt="avartar"
                      sx={{ width: '40px', height: '40px' }}
                    />
                    <Typography sx={{ fontSize: '20px' }}>@BigBull</Typography>
                  </Stack>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/gif/3.gif"
                    sx={{ borderRadius: "10px" }}
                  />
                  <Typography gutterBottom variant="h5" component="div" mt={3}>
                    Spider Eyes Modern Art
                  </Typography>
                  <Stack direction={'row'} justifyContent="space-between">
                    <Stack>
                      <Typography>Current Bid:</Typography>
                      <Typography sx={{ color: "#1066e7" }}>20.5ETH</Typography>
                    </Stack>
                    <Fab color="primary" aria-label="add">
                      <ShoppingBagIcon />
                    </Fab>
                  </Stack>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white', p: 3 }}>
                  <Stack direction={'row'} alignItems="center" spacing={2} mb={3}>
                    <Avatar src="https://shreethemes.in/superex/layouts/images/client/05.jpg"
                      alt="avartar"
                      sx={{ width: '40px', height: '40px' }}
                    />
                    <Typography sx={{ fontSize: '20px' }}>@Princess</Typography>
                  </Stack>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/items/4.jpg"
                    sx={{ borderRadius: "10px" }}
                  />
                  <Typography gutterBottom variant="h5" component="div" mt={3}>
                    Synthwave Painting
                  </Typography>
                  <Stack direction={'row'} justifyContent="space-between">
                    <Stack>
                      <Typography>Current Bid:</Typography>
                      <Typography sx={{ color: "#1066e7" }}>20.5ETH</Typography>
                    </Stack>
                    <Fab color="primary" aria-label="add">
                      <ShoppingBagIcon />
                    </Fab>
                  </Stack>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white', p: 3 }}>
                  <Stack direction={'row'} alignItems="center" spacing={2} mb={3}>
                    <Avatar src="https://shreethemes.in/superex/layouts/images/client/10.jpg"
                      alt="avartar"
                      sx={{ width: '40px', height: '40px' }}
                    />
                    <Typography sx={{ fontSize: '20px' }}>@KristyHoney</Typography>
                  </Stack>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/gif/4.gif"
                    sx={{ borderRadius: "10px" }}
                  />
                  <Typography gutterBottom variant="h5" component="div" mt={3}>
                    Contemporary Abstract
                  </Typography>
                  <Stack direction={'row'} justifyContent="space-between">
                    <Stack>
                      <Typography>Current Bid:</Typography>
                      <Typography sx={{ color: "#1066e7" }}>20.5ETH</Typography>
                    </Stack>
                    <Fab color="primary" aria-label="add">
                      <ShoppingBagIcon />
                    </Fab>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
