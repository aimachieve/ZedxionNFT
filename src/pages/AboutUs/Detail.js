// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Box, Button, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LandingBlogs1 } from 'components/_external-pages/landing';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

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

export default function Detail() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          {/* Detail */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <img
                  src='https://shreethemes.in/superex/layouts/images/about.jpg'
                  alt="NFT"
                  style={{ borderRadius: '10px', width: 'auto', height: '100%' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MotionInView variants={varFadeInUp} style={{ marginTop: '150px' }}>
                  <Stack spacing={3} justifyContent="center">
                    <Typography sx={{ color: '#0E77B7', fontSize: '20px' }}>
                      Creative Vision & Mission
                    </Typography>
                    {/* Title */}
                    <Typography variant='h3'>
                      We develop & create
                      digital art.
                    </Typography>
                    {/* Description */}
                    <Typography sx={{ color: '#b9c6d8', fontSize: '20px' }}>
                      Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.
                      <br />
                      <br />
                      It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.
                    </Typography>
                    <Button
                      sx={{ width: 100, borderRadius: "20px", color: "white", width: "150px", p: 1.2 }}
                      color="primary"
                      variant="contained"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Read More
                    </Button>
                  </Stack>
                </MotionInView>
              </Grid>
            </Grid>
          </MotionInView>
          {/* Trading Volumn */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '100px' }}>
            <Grid
              container
              justifyContent={{ xs: 'center', md: 'space-between' }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              <Grid item xs={12} md={4}>
                <Stack alignItems={'center'} spacing={1}>
                  <Typography sx={{ fontSize: '58px' }}> $40M </Typography>
                  <Typography sx={{
                    textAlign: 'center'
                  }}>
                    Trading volume
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack alignItems={'center'} spacing={1}>
                  <Typography sx={{ fontSize: '58px' }}>200</Typography>
                  <Typography sx={{
                    textAlign: 'center'
                  }}>
                    NFTs created
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack alignItems={'center'} spacing={1}>
                  <Typography sx={{ fontSize: '58px' }}>234K</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Total users
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </MotionInView>

          {/* Our Team */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '100px' }}>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={3}>
              <Typography sx={{
                fontSize: '40px',
              }}>Our Team</Typography>
              <Typography sx={{
                color: "#b9c6d8",
                textAlign: 'center'
              }}>
                We are a huge marketplace dedicated to connecting great artists of all Zedxion <br /> with their fans and unique token collectors!
              </Typography>
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInUp} style={{ marginTop: '100px' }}>
            <Grid
              container
              spacing={3}
              justifyContent={{ xs: 'center', md: 'space-between' }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              {
                [...Array(8)].map((value, index) => (
                  <Grid item xs={12} md={3}>
                    <Stack alignItems={'center'} spacing={2}>
                      {/* Item hover overlay */}
                      <Box
                        sx={{
                          textAlign: 'center',
                          mx: 1,
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'center',
                          height: '200px',
                          width: '200px',
                          borderRadius: '50%',
                          background: `url(https://shreethemes.in/superex/layouts/images/client/0${index + 1}.jpg)`,
                          backgroundSize: 'cover',
                          // boxShadow: '0px 4px 31px rgba(0, 0, 0, 0.11)',
                          position: 'relative',
                          mt: 3,
                          mb: 1,
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            '& .overlay': { transform: 'translateY(0%)' },
                            transform: 'scale(1.1)',
                            transition: 'transform 0.5s'
                          }
                        }}
                      >
                        <Stack
                          className="overlay"
                          alignItems="flex-end"
                          justifyContent="center"
                          spacing={1}
                          direction="row"
                          sx={{
                            background: 'rgba(0, 0, 0, 0.2)',
                            position: 'absolute',
                            width: 1,
                            height: 1,
                            transform: 'translateY(-100%)',
                            transition: 'transform 0.3s',
                            pb: 2.5
                          }}
                        >
                          <Fab color="primary" aria-label="add" sx={{width: '40px', height: '40px'}}>
                            <FacebookIcon />
                          </Fab>
                          <Fab color="primary" aria-label="add" sx={{width: '40px', height: '40px'}}>
                            <InstagramIcon />
                          </Fab>
                          <Fab color="primary" aria-label="add" sx={{width: '40px', height: '40px'}}>
                            <TwitterIcon />
                          </Fab>
                        </Stack>
                      </Box>
                      <a href="#" style={{ fontSize: '20px' }}> {`Avartar${index + 1}`} </a>
                      <Typography sx={{
                        color: "#b9c6d8",
                        textAlign: 'center'
                      }}>
                        Designer
                      </Typography>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>
          </MotionInView>

          {/* Latest Blogs */}
          <LandingBlogs1 />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
