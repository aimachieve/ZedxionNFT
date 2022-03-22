import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack } from '@material-ui/core';
// routes
import { varWrapEnter, varFadeIn, varFadeInRight } from '../../components/animate';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  background: 'url(https://shreethemes.in/superex/layouts/images/bg/02.jpg)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  alignItems: 'center',
  paddingTop: theme.spacing(30),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
  }
}));

// ----------------------------------------------------------------------

export default function Banner() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <img alt="overlay" src="https://shreethemes.in/superex/layouts/images/bg/01.jpg" variants={varFadeIn} />
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'white', fontSize: 50, textAlign: 'center', fontStyle: 'Poppins' }}>
                Blog & News
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,.5)', fontSize: 25, textAlign: 'center', fontStyle: 'Poppins', }}>
                Our Latest Blog and News in Grid Layouts
              </Typography>
              <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" mt={15}>
                <Typography sx={{ color: 'rgba(255,255,255,.5)', fontSize: 20, textAlign: 'center', fontStyle: 'Poppins', }}>
                  ZEDXION
                </Typography>
                <ChevronRightIcon sx={{ color: 'rgba(255,255,255,.5)' }} />
                <Typography sx={{ color: 'white', fontSize: 20, lineHeight: '90px', textAlign: 'center', fontStyle: 'Poppins', mt: 15 }}>
                  BLOGS
                </Typography>
              </Stack>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
