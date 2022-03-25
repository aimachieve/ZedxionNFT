// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Avatar, Button, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

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
                  <Grid item xs={12} md={3}>
                    <Card sx={{ maxWidth: 345, background: '#010101', color: 'white', p: 3 }}>
                      <Stack direction={'row'} alignItems="center" spacing={2} mb={3}>
                        {
                          index + 1 < 10 ?
                            <Avatar src={`https://shreethemes.in/superex/layouts/images/client/0${index + 1}.jpg`}
                              alt="avartar"
                              sx={{ width: '40px', height: '40px' }}
                            /> :
                            <Avatar src={`https://shreethemes.in/superex/layouts/images/client/${index + 1}.jpg`}
                              alt="avartar"
                              sx={{ width: '40px', height: '40px' }}
                            />
                        }
                        <Typography sx={{ fontSize: '20px' }}>@Butterfly</Typography>
                      </Stack>
                      <CardMedia
                        component="img"
                        alt="NFT"
                        height="auto"
                        image={`https://shreethemes.in/superex/layouts/images/items/${index + 1}.jpg`}
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
                ))
              }
            </Grid>

            {/* Loading button */}
            <Button variant="contained" sx={{ color: 'white', mt: 5, ml: '50%' }}>
              Load More
              <img src="/assets/loading.gif" alt="loading" style={{ width: '20px', color: 'white' }} />
            </Button>
          </MotionInView>
          {/* Subscribe */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '100px' }}>
            <Grid
              container
              spacing={2}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <img src="/assets/cta.png" alt="img" height={'400px'} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2} justifyContent="center">
                  <Typography variant="h2">
                    Get Free collections <br />
                    with your subscription
                  </Typography>
                  <Stack spacing={1} direction="row" alignItems={'center'}>
                    <Typography >
                      Subscribe
                    </Typography>
                    <ArrowRightAltIcon />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
