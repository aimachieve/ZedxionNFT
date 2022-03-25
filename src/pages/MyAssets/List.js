import React, { useState, useEffect } from 'react'
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Avatar, Button, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import LayersIcon from '@mui/icons-material/Layers';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNFTContract } from 'hooks/useContract'
import { useWeb3React } from "@web3-react/core";
import { formatBigNumber } from 'utils/formatNumber';
import Card from './Card_Assets'

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
  [theme.breakpoints.up('md')]: {
  }
}));
// ----------------------------------------------------------------------

export default function List() {
  const { account } = useWeb3React()
  const NFTContract = useNFTContract(process.env.REACT_APP_NFT_CONTRACT_ADDRESS)
  console.log("NFT COntract=>", NFTContract)

  const [NFTs, setNFTs] = useState(null)

  useEffect(() => {
    const init = async () => {
      const tokenIds = await NFTContract.tokensOfOwner(account)
      console.log("tokenIds=>", tokenIds)

      setNFTs(tokenIds)
    }

    init()
  }, [account])

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          {/* Button Group */}
          {/* <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Stack direction={'row'} spacing={2} justifyContent="center" >
              <Button
                startIcon={<LayersIcon />}
                variant="outlined"
              >
                All
              </Button>
              <Button
                startIcon={<SportsVolleyballIcon />}
                variant="outlined"
              >
                Games
              </Button>
              <Button
                startIcon={<FiberSmartRecordIcon />}
                variant="outlined"
              >
                Art
              </Button>
              <Button
                startIcon={<QueueMusicIcon />}
                variant="outlined"
              >
                Music
              </Button>
              <Button
                startIcon={<CameraAltIcon />}
                variant="outlined"
              >
                Video
              </Button>
              <Button
                startIcon={<AirlineStopsIcon />}
                variant="outlined"
              >
                Memes
              </Button>
            </Stack>
          </MotionInView> */}
          {/* List */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
            >
              {
                NFTs ?. length > 0 ?
                  NFTs.map((NFT, i) => (
                    <Grid item xs={12} md={3} key={i}>
                      <Card tokenId={formatBigNumber(NFT)} />
                    </Grid>
                  )) :
                  <Typography variant="h2">
                    You have no NFTs in your account.
                  </Typography>
              }
            </Grid>

            {/* Loading button */}
            {/* <Button variant="contained" sx={{ color: 'white', mt: 5, ml: '50%' }}>
              Load More
              <img src="/assets/loading.gif" alt="loading" style={{ width: '20px', color: 'white' }} />
            </Button> */}
          </MotionInView>
          {/* Subscribe */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '100px' }}>
            <Grid
              container
              spacing={2}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <img src="/assets/cta.png" alt="img" height={'400px'} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2} justifyContent="center">
                  <Typography variant="h2">
                    Get Free collections <br />
                    with your subscription
                  </Typography>
                  <Stack spacing={1} direction="row" alignItems={'center'}>
                    <Typography >
                      Subscribe
                    </Typography>
                    <ArrowRightAltIcon />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
