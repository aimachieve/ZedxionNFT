// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Stack, Container, Typography, Link, useMediaQuery } from '@material-ui/core';
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
  marginTop: theme.spacing(10),
  textAlign: 'left',
}));

// ----------------------------------------------------------------------

export default function LandingTeam() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <RootStyle id="about">
        
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack direction={isDesktop ? 'row' : 'column'} justifyContent={'space-between'} spacing={3}>
              <Stack>
                <img src="/assets/pic_frame.png" alt="uzoma"  />
              </Stack>
              <Stack pt={5}>
                <Typography sx={{
                  fontFamily: 'Lakki',
                  fontSize: '30px',
                  fontWeight: 'bold'
                }}>
                  UZOMA DUNKWU
                </Typography>
                <Typography sx={{
                  fontFamily: 'Arvo',
                  marginBottom: '20px',
                  textAlign: 'left'
                }}>
                  I ‘m an Animation Director/Creator/Writer from Nigeria. I’m also a self-taught artist with over 7 years of professional experience and a Bachelor’s Degree in Engineering. I’ve worked as a Character Designer at Netflix Animation and Marvel Studios Animation.
                  <br />
                  <br />
                  I chose to drop this NFT collection to raise income to sustain my family, do less freelance work and focus on what I’m good at - Creating. Starting with directing my short film -Artsy (via an ongoing production deal), I’ll also be further developing my other IPs into graphic novels and children’s books.
                </Typography>
                <Stack direction={'row'} mt={4} mb={2} justifyContent={isDesktop ? '' : 'center'}>
                  <Link
                    href="https://www.instagram.com/uzomadunkwu/"
                    target="_blank"
                  >
                    <img src="/assets/instagram.png" alt="instagram" style={{
                      width: '20px',
                      height: '20px',
                      marginRight: '20px'
                    }} />
                  </Link>
                  <Link
                    href="https://www.twitter.com/uzomadunkwu/"
                    target="_blank"
                  >
                    <img src="/assets/twitter.png" alt="twitter" style={{
                      width: '20px',
                      height: '20px'
                    }} />
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
         
    </RootStyle>
  );
}
