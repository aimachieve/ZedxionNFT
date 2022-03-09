// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Button } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  background: '#010101',
  color: '#ffffff'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack spacing={2} alignItems={'center'}>
              <img src="/assets/chiefsquare_logo.png" alt="chiefsquare_logo" style={{ width: '800px' }} />
              <img src="/assets/us.png" alt="us" style={{ width: '800px', borderRadius: '5px' }} />
              <Typography sx={{ fontFamily: "ArvoItalic", textAlign: 'left' }}>
                Since 2017, Uzoma has tutored over 100  animators in Nigeria.
              </Typography>
            </Stack>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography sx={{ fontFamily: "Arvo", textAlign: 'left', marginTop: '30px' }}>
              Chiefsquare is a creative space for talent development designed for and by Africans on the continent and in diaspora. The long term goal of Chiefsquare is to nurture a million creatives equipped with superior skills to serve the entertainment industry in Africa. 20% of the proceeds from the sales of <b style={{ fontStyle: 'italic' }}>  222 Black Faces </b>
              collection will serve as seed funding for the organization to kick-start in 2022.
              <br />
              <br />
              For Chiefsquare to reach budding artists in the nooks and crannies of Africa, it would need to adopt an online model for its operations. Suitable personnel will run the organization remotely from various parts of Africa. The value created by the organization will be tailored to the needs of developing artists across the continent. Talents in the animation and film industry will be the primary focus for the mid term.

            </Typography>
          </MotionInView>

          {/* Join */}
          <MotionInView variants={varFadeInUp}>
            <Stack justifyContent={'center'} alignItems={'center'} mt={10}>
              <img src="/assets/pagebreak1.png" alt='pagebreak1' style={{ width: '130px', height: '60px' }} />
              <Typography sx={{
                fontFamily: 'Lakki',
                fontSize: '30px',
                marginTop: '30px'
              }}>
                JOIN OUR DISCORD FOR UPDATES
              </Typography>
              <Button href="https://discord.gg/qvpeMmTPyV" target="_blank" sx={{
                backgroundColor: '#dc3d30',
                color: 'white',
                fontFamily: 'Arvo',
                width: '200px',
                height: '60px',
                borderRadius: '10px',
              }}>
                JOIN NOW
              </Button>
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
