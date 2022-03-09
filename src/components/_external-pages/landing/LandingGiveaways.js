// material
import { styled, useTheme  } from '@material-ui/core/styles';
import { Container, Typography, Stack, Box, useMediaQuery  } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';

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
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <RootStyle id="giveaways">
        
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack justifyContent={'center'} alignItems={'center'}>
              <Typography sx={{
                fontFamily: 'Lakki',
                fontSize: '30px',
                fontWeight: 'bold'
              }}>GIVEAWAYS</Typography>
              <Typography sx={{
                fontFamily: 'Arvo'
              }}>Buying various amounts of NFTs grants permanent access to various perks!</Typography>
            </Stack>

            <Stack spacing={5} mt={5} justifyContent={'space-around'} alignItems={'center'} direction={isDesktop ? 'row' : 'column'}>
              {/* Rubby Collector */}
              <Box
                sx={{
                  width: 300,
                  height: 650,
                  borderRadius: '15px',
                  backgroundColor: '#474545',
                  padding: '15px',
                  '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                {/* Title */}
                <Stack direction={'row'} alignItems={'center'} spacing={2} mb={2}>
                  <img src="/assets/ruby_symbol1.png" alt='pink' style={{ width: '50px' }} />
                  <Typography sx={{ fontFamily: 'Lakki', fontSize: '20px' }}>
                    RUBY <br />
                    COLLECTOR
                  </Typography>
                </Stack>
                {/* Description */}
                <Stack>
                  <Typography sx={{
                    color: '#ff43a1',
                    fontFamily: "Arvo",
                    marginLeft: '5px',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    Purchase 20 NFTs <br />
                    to unlock
                  </Typography>
                </Stack>
                <Stack mt={2} spacing={1}>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/ruby_symbol2.png" alt="ruby_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Original artworks
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/ruby_symbol2.png" alt="ruby_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Access to free course contents
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/ruby_symbol2.png" alt="ruby_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Coupon (50% off) for a year's subscription to Chiefsquare
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/ruby_symbol2.png" alt="ruby_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      A free copy of African Coloring Book
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/ruby_symbol2.png" alt="ruby_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Bonus NFT for next drop
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/ruby_symbol2.png" alt="ruby_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      An exclusive look into Artsy
                      (Animated short project)
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/ruby_symbol2.png" alt="ruby_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      One free self-portrait commission
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/ruby_symbol2.png" alt="ruby_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Private Collection Sketch-books(limited)
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              {/* Platinum Collector */}
              <Box
                sx={{
                  width: 300,
                  height: 650,
                  borderRadius: '15px',
                  backgroundColor: '#474545',
                  padding: '15px',
                  '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                {/* Title */}
                <Stack direction={'row'} alignItems={'center'} spacing={2} mb={2}>
                  <img src="/assets/platinum_symbol1.png" alt='platinum_symbol1' style={{ width: '50px' }} />
                  <Typography sx={{ fontFamily: 'Lakki', fontSize: '20px' }}>
                    PLATINUM <br />
                    COLLECTOR
                  </Typography>
                </Stack>
                {/* Description */}
                <Stack>
                  <Typography sx={{
                    color: '#e5e5e5',
                    fontFamily: "ArvoItalic",
                    marginLeft: '5px',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    Purchase 10 NFTs <br />
                    to unlock
                  </Typography>
                </Stack>
                <Stack mt={2} spacing={1}>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/platinum_symbol2.png" alt="platinum_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Original artworks
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/platinum_symbol2.png" alt="platinum_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Access to free course contents
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/platinum_symbol2.png" alt="platinum_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Coupon (50% off) for a year's subscription to Chiefsquare
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/platinum_symbol2.png" alt="platinum_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      A free copy of African Coloring Book
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/platinum_symbol2.png" alt="platinum_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Bonus NFT for next drop
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/platinum_symbol2.png" alt="platinum_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      An exclusive look into Artsy
                      (Animated short project)
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              {/* Gold Collector */}
              <Box
                sx={{
                  width: 300,
                  height: 650,
                  borderRadius: '15px',
                  backgroundColor: '#474545',
                  padding: '15px',
                  '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                {/* Title */}
                <Stack direction={'row'} alignItems={'center'} spacing={2} mb={2}>
                  <img src="/assets/gold_symbol1.png" alt='pink' style={{ width: '50px' }} />
                  <Typography sx={{ fontFamily: 'Lakki', fontSize: '20px' }}>
                    GOLD <br />
                    COLLECTOR
                  </Typography>
                </Stack>
                {/* Description */}
                <Stack>
                  <Typography sx={{
                    color: '#ffe845',
                    fontFamily: "ArvoItalic",
                    marginLeft: '5px',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    Purchase 5 NFTs <br />
                    to unlock
                  </Typography>
                </Stack>
                <Stack mt={2} spacing={1}>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/gold_symbol2.png" alt="gold_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Original artworks
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/gold_symbol2.png" alt="gold_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Access to free course contents
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/gold_symbol2.png" alt="gold_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Coupon (50% off) for a year's subscription to Chiefsquare
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/gold_symbol2.png" alt="gold_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      A free copy of African Coloring Book
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              {/* Single Collector */}
              <Box
                sx={{
                  width: 300,
                  height: 650,
                  borderRadius: '15px',
                  backgroundColor: '#474545',
                  padding: '15px',
                  '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                {/* Title */}
                <Stack direction={'row'} alignItems={'center'} spacing={2} mb={2}>
                  <img src="/assets/single_symbol1.png" alt='pink' style={{ width: '50px' }} />
                  <Typography sx={{ fontFamily: 'Lakki', fontSize: '20px' }}>
                    SINGLE <br />
                    COLLECTOR
                  </Typography>
                </Stack>
                {/* Description */}
                <Stack>
                  <Typography sx={{
                    color: '#8093b2',
                    fontFamily: "ArvoItalic",
                    marginLeft: '5px',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    Purchase 1 NFTs <br />
                    to unlock
                  </Typography>
                </Stack>
                <Stack mt={2} spacing={1}>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/single_symbol2.png" alt="single_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Original artworks
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <img src="/assets/single_symbol2.png" alt="single_symbol2" style={{ width: '20px', height: '15px', marginTop: '5px' }} />
                    <Typography sx={{
                      fontFamily: 'ArvoItalic'
                    }}>
                      Access to free course contents
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Stack justifyContent={'center'} alignItems={'center'} mt={3} spacing={3}>
              <img src="/assets/pagebreak1.png" alt='pagebreak1' style={{width: '130px', height: '60px'}} />
              <Typography sx={{
                fontFamily: 'ArvoItalic'
              }}>
                Buyers of Uzoma Dunkwu's Black Female Heads Sketch Pack 1(via Gumroad) are entitled to a 24 hour first dibs to purchase NFTs in this collection.
                </Typography>
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
