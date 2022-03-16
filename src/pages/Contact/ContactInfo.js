// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Link, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';

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
    textAlign: 'center',
  }
}));
// ----------------------------------------------------------------------

export default function ContactInfo() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid
              container
              justifyContent={{ xs: 'center', md: 'space-between' }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              <Grid item xs={12} md={4}>
                <Stack alignItems={'center'} spacing={3}>
                  <Stack alignItems="center" justifyContent="center" sx={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    background: 'rgba(16,102,231,0.1)',
                    borderRadius: '15px'
                  }}>
                    <PhoneIcon sx={{ color: "#1066e7", width: '40px', height: '40px' }} />
                  </Stack>
                  <Typography sx={{ fontSize: '22px' }}> Phone</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start working with Zedxion NFTs that can provide everything
                  </Typography>
                  <a href="tel:+152534-468-854">+152 534-468-854</a>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack alignItems={'center'} spacing={3}>
                  <Stack alignItems="center" justifyContent="center" sx={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    background: 'rgba(16,102,231,0.1)',
                    borderRadius: '15px'
                  }}>
                    <EmailIcon sx={{ color: "#1066e7", width: '40px', height: '40px' }} />
                  </Stack>
                  <Typography sx={{ fontSize: '22px' }}>Email</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start working with Zedxion NFTs that can provide everything
                  </Typography>
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack alignItems={'center'} spacing={3}>
                  <Stack alignItems="center" justifyContent="center" sx={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    background: 'rgba(16,102,231,0.1)',
                    borderRadius: '15px'
                  }}>
                    <AddLocationIcon sx={{ color: "#1066e7", width: '40px', height: '40px' }} />
                  </Stack>
                  <Typography sx={{ fontSize: '22px' }}>Location</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start working with Zedxion NFTs that can provide everything
                  </Typography>
                  <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin">View on Google map</a>
                </Stack>
              </Grid>
            </Grid>
          </MotionInView>

          <MotionInView variants={varFadeInUp} style={{ marginTop: '100px' }}>
            <Grid container spacing={5} mb={3} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={12} md={6} sx={{ border: '1px solid rgb(255 255 255 / 15%)', borderRadius: '10px', padding: '20px' }}>
                <Stack spacing={2} mb={3}>
                  <Typography variant="h3" textAlign={'left'} mb={3}>Get In Touch !</Typography>
                  <Stack direction="row" justifyContent={'space-between'}>
                    <TextField label="Enter YOur Name :" />
                    <TextField label="Enter Your Email :" />
                  </Stack>
                  <TextField label="Type Subject" />
                  <TextField multiline rows={5} label="Enter Your Message :" fullWidth />
                  <Button variant="contained" p="3">CONTACT US</Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="https://shreethemes.in/superex/layouts/images/svg/office-desk.svg" alt="" style={{ width: '100%', height: '100%' }} />
              </Grid>
            </Grid>
          </MotionInView>

        </ContentStyle>
      </Container>

      <MotionInView variants={varFadeInUp} style={{ marginTop: '100px' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: "300px" }} allowfullscreen=""></iframe>
      </MotionInView>
    </RootStyle>
  );
}
