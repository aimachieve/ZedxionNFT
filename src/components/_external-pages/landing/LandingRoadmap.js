// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Button } from '@material-ui/core';
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
  textAlign: 'center',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));
// ----------------------------------------------------------------------

export default function LandingRoadmap() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack justifyContent={'center'} alignItems={'center'}>
              <Typography sx={{
                fontFamily: 'Lakki',
                fontSize: '30px',
                fontWeight: 'bold'
              }}>UTILITY OF NFTS</Typography>
              <Typography sx={{
                fontFamily: 'Arvo',
                marginBottom: '20px' 
              }}>
                The highlight of this drop is the Chiefsquare community to be built with 20% of the sales.
              </Typography>
              <Button href="https://discord.gg/qvpeMmTPyV" target="_blank" sx={{
                backgroundColor: '#dc3d30',
                color: 'white',
                fontFamily: 'Arvo',
                width: '300px',
                height: '60px',
                borderRadius: '10px',
                marginBottom: '30px'
              }}>
                JOIN OUR DISCORD NOW
              </Button>

              <img src="/assets/utility.png" alt="utility_symbol" style={{ width: '1100px' }} />
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
