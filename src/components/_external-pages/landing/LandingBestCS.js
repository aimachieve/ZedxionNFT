import React from 'react'
// material
import { styled, useTheme } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import { Container, Typography, Stack, Button, InputBase, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';

import Avatar from '@mui/material/Avatar';
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // padding: theme.spacing(8, 0),
  background: '#010101',
  color: '#ffffff'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));
// ----------------------------------------------------------------------

export default function LandingBestCS() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack>
              <Typography sx={{
                fontSize: '40px',
              }}>
                Best Creators & Sellers
              </Typography>
              <Typography sx={{
                color: "#b9c6d8"
              }}>
                Best sellers of the week's NFTs
              </Typography>
              <Stack direction={isDesktop ? 'row' : 'column'} flexWrap={'wrap'} alignItems="center" mt={5} mb={5} >
                {
                  [...Array(12)].map((value, i) => (
                    <MotionInView variants={varFadeInUp} key={i} style={{ marginBottom: '20px' }}>
                      <Stack direction={'row'} justifyContent="center" alignItems={'center'} spacing={2} mb={5} mr={6}>
                        <Typography sx={{
                          color: "#b9c6d8",
                          fontWeight: 'bold'
                        }}>
                          {
                            i + 1 < 10 ?
                              `0${i + 1}` :
                              i + 1
                          }
                        </Typography>
                        <Avatar src={
                          i + 1 < 10 ?
                          `https://shreethemes.in/superex/layouts/images/client/0${i + 1}.jpg` :
                          `https://shreethemes.in/superex/layouts/images/client/${i + 1}.jpg` 
                        }
                          alt="avartar"
                          sx={{width: '54px', height: '54px'}}
                        />
                        <Stack>
                          <Typography>Name {i + 1}</Typography>
                          <Typography sx={{
                            color: "#b9c6d8"
                          }}>
                            20.5 ETH
                          </Typography>
                        </Stack>
                      </Stack>
                    </MotionInView >
                  )
                  )
                }
              </Stack >
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle >
  );
}
