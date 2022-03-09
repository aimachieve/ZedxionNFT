// import { Icon } from '@iconify/react';
// import googleFill from '@iconify/icons-eva/google-fill';
// import twitterFill from '@iconify/icons-eva/twitter-fill';
// import facebookFill from '@iconify/icons-eva/facebook-fill';
// import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// import { Link as ScrollLink } from 'react-scroll';
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, Stack, TextField, Button } from '@material-ui/core';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
//
// import SvgIconStyle from 'components/SvgIconStyle';
// ----------------------------------------------------------------------

// const SOCIALS = [
//   { name: 'FaceBook', icon: facebookFill },
//   { name: 'Google', icon: googleFill },
//   { name: 'Linkedin', icon: linkedinFill },
//   { name: 'Twitter', icon: twitterFill }
// ];

const LINKS = [
  {
    headline: 'Superex',
    children: [
      { name: 'Explore', href: '#' },
      { name: 'Live Auction', href: '#' },
      { name: 'Activites', href: '#' },
      { name: 'Wallet', href: '#' },
      { name: 'Creators', href: '#' },
    ]
  },
  {
    headline: 'Community',
    children: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Login', href: '#' },
      { name: 'Subscribe', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#090909',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  color: '#adb5bd'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid container item xs={12} md={12} spacing={3}>
            <Grid item xs={6} md={3} justifyContent="space-between">
              <img src='/assets/home/footer-logo.png' alt='footer-logo' />
              <Typography
                variant="overline"
                color="#adb5bd"
                sx={{
                  display: 'block',
                  fontWeight: 300,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  mt: 2,
                }}
              >
                Buy, sell and discover exclusive digital assets by the top artists of NFTs world.
              </Typography>
            </Grid>
            {LINKS.map((list, index) => {
              const { headline, children } = list;
              return (
                <Grid item xs={6} md={3} justifyContent="space-between" key={index}>
                  <Stack spacing={1}>
                    <Typography
                      variant="overline"
                      color="#adb5bd"
                      sx={{ fontFamily: 'Poppins', fontSize: 20, lineHeight: '30px', fontWeight: 600, mb: 3 }}
                    >
                      {headline}
                    </Typography>
                    {children.map((link, index) => (
                      <Link
                        to={link.href}
                        key={index}
                        color="#adb5bd"
                        component={RouterLink}
                        sx={{
                          display: 'flex',
                          fontWeight: 300,
                          fontSize: 16,
                          fontFamily: 'Poppins',
                        }}
                      >
                        <ChevronRightIcon />
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              );
            })}
            <Grid item xs={6} md={3} justifyContent="space-between">
              <Stack spacing={3} >
              <Typography
                variant="overline"
                color="#adb5bd"
                sx={{ fontFamily: 'Poppins', fontSize: 20, lineHeight: '30px', fontWeight: 600 }}
              >
                Newsletter
              </Typography>
              <Typography
                variant="overline"
                color="#adb5bd"
                sx={{
                  display: 'block',
                  fontWeight: 300,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  mt: 2,
                }}
              >
                Sign up and receive the latest tips via email.
              </Typography>
              <Typography
                variant="overline"
                color="#adb5bd"
                sx={{
                  display: 'block',
                  fontWeight: 300,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  mt: 2,
                }}
              >
                Write your email <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                id="input-with-icon-textfield"
                placeholder='Your email : '
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  )
                }}
              />
              <Button variant="contained" fullWidth>Subscribe</Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Typography
        color="#adb5bd"
        sx={{
          py: 4,
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '24px',
          textAlign: 'center',
          fontFamily: 'Poppins'
        }}
      >
        © 2022 Zedxioncryptocurrency. Design & Building by David Martin.
      </Typography>
    </RootStyle>
  );
}
