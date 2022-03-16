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
import { Grid, Link, Divider, Container, Typography, Stack, TextField, Button, IconButton } from '@material-ui/core';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// ----------------------------------------------------------------------

// const SOCIALS = [
//   { name: 'FaceBook', icon: facebookFill },
//   { name: 'Google', icon: googleFill },
//   { name: 'Linkedin', icon: linkedinFill },
//   { name: 'Twitter', icon: twitterFill }
// ];

const LINKS = [
  {
    headline: 'Zedxion',
    children: [
      { name: 'Explore', href: '/explore' },
      { name: 'Live Auction', href: '/auction' },
      { name: 'Activites', href: '/activity' },
      { name: 'Creators', href: '/creators' },
    ]
  },
  {
    headline: 'Community',
    children: [
      { name: 'About Us', href: '/aboutus' },
      { name: 'Blog', href: '/blog' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      // { name: 'Login', href: '#' },
      // { name: 'Subscribe', href: 'mailto:contact@example.com' },
      { name: 'Contact', href: '/contact' }
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
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Stack direction="row" justifyContent={'space-between'} mb={3}>
          <Stack spacing={3}>
            <Typography sx={{ fontSize: '22px' }}>Download the Zedxion app to explore any NFTs</Typography>
            <Stack direction="row" spacing={3}>
              <img src="https://shreethemes.in/superex/layouts/images/app.png" height="40" alt="" />
              <img src="https://shreethemes.in/superex/layouts/images/app.png" height="40" alt="" />
            </Stack>
          </Stack>
          <Stack spacing={3}>
            <Typography sx={{ fontSize: '22px' }}>Join Zedxion community</Typography>
            <Stack direction="row" spacing={3}>
              <IconButton aria-label="delete" size="small" sx={{
                border: '1px solid', 
                '&:hover': { background: "#1066e7" }
              }}>
                <FacebookIcon fontSize='small'  color="white" />
              </IconButton>
              <IconButton aria-label="delete" size="small" sx={{
                border: '1px solid', 
                '&:hover': { background: "#1066e7" }
              }}>
                <InstagramIcon fontSize='small'  color="white" />
              </IconButton>
              <IconButton aria-label="delete" size="small" sx={{
                border: '1px solid', 
                '&:hover': { background: "#1066e7" }
              }}>
                <LinkedInIcon fontSize='small'  color="white" />
              </IconButton>
              <IconButton aria-label="delete" size="small" sx={{
                border: '1px solid', 
                '&:hover': { background: "#1066e7" }
              }}>
                <TwitterIcon fontSize='small'  color="white" />
              </IconButton>
              <IconButton aria-label="delete" size="small" sx={{
                border: '1px solid', 
                '&:hover': { background: "#1066e7" }
              }}>
                <TelegramIcon fontSize='small'  color="white" />
              </IconButton>
              <IconButton aria-label="delete" size="small" sx={{
                border: '1px solid', 
                '&:hover': { background: "#1066e7" }
              }}>
                <WhatsAppIcon fontSize='small'  color="white" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        <Divider />
        
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 4 }}
        >
          <Grid container item xs={12} md={12} spacing={3}>
            <Grid item xs={6} md={3} justifyContent="space-between">
              <img src='/assets/home/logo.png' style={{ width: '115px', height: '100px' }} alt='footer-logo' />
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
                          textAlign: 'left'
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
        © 2022 Zedxioncryptocurrency. Design & Building by Victor Esan.
      </Typography>
    </RootStyle>
  );
}
