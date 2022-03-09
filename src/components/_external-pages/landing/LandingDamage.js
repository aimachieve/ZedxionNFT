// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Link } from '@material-ui/core';
//
import { MotionInView, varFadeInUp, } from '../../animate';
import Accordion from './Accordion'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  background: '#010101',
  color: '#ffffff',
  marginBottom: '30px'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'left',
}));

// ----------------------------------------------------------------------

export default function LandingDarkMode() {
  return (
    <RootStyle id="faq">
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack spacing={2}>
              <Typography sx={{
                fontFamily: 'Lakki',
                fontSize: '30px',
                marginTop: '30px'
              }}>
                FAQ
              </Typography>
            </Stack>

            <Accordion />

            <Stack direction={'row'} mt={4} mb={4} justifyContent={'flex-end'} alignItems={'center'}>
              <Link
                href="https://opensea.io/collection/222-black-faces/"
                target="_blank"
              >
                <img src="/assets/opensea.svg" alt="opensea" style={{
                  marginRight: '30px',
                  width: '25px',
                  height: '25px'
                }} />
              </Link>
              <Link
                href="https://discord.gg/qvpeMmTPyV"
                target="_blank"
              >
                <img src="/assets/discord.png" alt="discord" style={{
                  marginRight: '30px',
                  width: '25px',
                  height: '20px'
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
          </MotionInView>
        </ContentStyle>
      </Container>
       
    </RootStyle>
  );
}
