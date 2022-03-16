// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Box, Button, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Accordion from './Accordion'

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
              <Typography variant="h5">Introduction :</Typography>
              <Typography sx={{ color: '#b9c6d8',  }}>
                It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.
              </Typography>

              <Typography variant="h5">User Agreements :</Typography>
              <Typography sx={{ color: '#b9c6d8',  }}>
                The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.
                <br />
                <br />
                There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.
                <br />
                <br />
                It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.
              </Typography>

              <Typography variant="h5">Restrictions :</Typography>
              <Typography sx={{ color: '#b9c6d8',  }}>
                You are specifically restricted from all of the following :
                <br />
                <br />
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
              <Typography sx={{ color: '#b9c6d8',  }}>
                It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.
              </Typography>

              {/* Accordion */}
              <Accordion />

              <Stack direction="row" spacing={1}>
                <Button variant="contained" sx={{color: 'white'}}>Accept</Button>
                <Button variant="outlined">Decline</Button>
              </Stack>
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
