import React, { useEffect, useState } from 'react'
// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Stack, Container, Typography, Button, useMediaQuery, Grid } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, ButtonAnimate } from '../../components/animate';
import { useLocation } from "react-router-dom"
import Countdown from 'react-countdown';
import GavelIcon from '@mui/icons-material/Gavel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DetailsTab from "./BidDetailsTab"
import RelatedItems from "./RelatedItems"
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(10),
  background: '#010101',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  color: 'white'
}));
// ----------------------------------------------------------------------

export default function BidPage() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const location = useLocation()
  const index = String(location.pathname).substring(5)
  const [data, setData] = useState(null)
  console.log("index =>", index)

  useEffect(() => {

  }, [])

  // Random component
  const Completionist = () => <span>You are good to go!</span>;
  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span style={{ fontSize: "26px", fontWeight: 'bold' }}>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
    <RootStyle>
      <Container maxWidth="lg" mt={10}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <img
              src={`https://shreethemes.in/superex/layouts/images/items/${index}.jpg`}
              alt="NFT"
              style={{ borderRadius: '10px', width: 'auto', height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionInView variants={varFadeInUp}>
              <Stack spacing={3}>
                {/* Title */}
                <Typography variant='h3'>
                  {`NFT${index}`}
                </Typography>
                {/* Bid content */}
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Stack spacing={1}>
                    <Typography variant="h5"> Current Bid </Typography>
                    <Typography variant="h4"> 4.85 ETH </Typography>
                    <Typography variant="h6" sx={{ color: "#b9c6d8" }}> $3000.90USD </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="h5"> Auction Ending In </Typography>
                    <Countdown
                      date={Date.now() + 5 * 10 ** 10}
                      renderer={renderer}
                    />
                  </Stack>
                </Stack>
                {/* Button Group */}
                <Stack direction={'row'} spacing={2}>
                  <Button
                    sx={{ width: 100, borderRadius: "20px", color: "white", width: "150px", p: 1.2 }}
                    color="primary"
                    variant="contained"
                    startIcon={<GavelIcon />}
                  >
                    Bid
                  </Button>
                  <Button
                    sx={{ width: 100, borderRadius: "20px", color: "white", width: "150px", p: 1.2 }}
                    color="primary"
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                  >
                    Buy Now
                  </Button>
                </Stack>
                {/* Dtails Tab */}
                <DetailsTab />
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>

        {/* Related Items */}
        <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
          <RelatedItems />
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
