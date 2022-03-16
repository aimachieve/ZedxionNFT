// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Box, Button, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
  border: '1px solid rgb(255 255 255 / 15%)',
  m: 3,
  borderRadius: '10px',
  [theme.breakpoints.up('md')]: {
  }
}));
// ----------------------------------------------------------------------

export default function Details() {
  return (
    <RootStyle>
      <Container maxWidth="md">
        <ContentStyle>
          {/* Details */}
          <MotionInView variants={varFadeInUp} style={{ margin: '20px' }}>
            <Stack spacing={2}>
              <Typography variant="h5">Overview  :</Typography>
              <Typography sx={{ color: '#b9c6d8', }}>
                It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.
                <br />
                <br />
                In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.
                <br />
                <br />
                There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.
              </Typography>

              <Typography variant="h5">Information Provided Voluntarily :</Typography>
              <Typography sx={{ color: '#b9c6d8', }}>
                <ArrowForwardIcon /> Digital Marketing Solutions for Tomorrow
                <br />
                <ArrowForwardIcon /> Our Talented & Experienced Marketing Agency
                <br />
                <ArrowForwardIcon /> Create your own skin to match your brand
                Digital Marketing Solutions for Tomorrow
                <br />
                <ArrowForwardIcon /> Our Talented & Experienced Marketing Agency
                <br />
                <ArrowForwardIcon /> Create your own skin to match your brand
              </Typography>

              <Typography variant="h5">Users Question & Answer :</Typography>
              <Typography sx={{ color: '#b9c6d8', }}>
                It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.
              </Typography>

              <Button variant="outlined" sx={{width: '100px'}}>Print</Button>
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
