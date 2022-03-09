import React from 'react'
// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Stack, Container, useMediaQuery, Typography } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
// import 'react-videoplayer/lib/i.css'
// import VideoLooper from 'react-video-looper'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(14),
  // background: 'url(/images/about-bg.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  marginBottom: '30px'
}));
// ----------------------------------------------------------------------

export default function LandingNFTs() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <RootStyle>
       
      <Container maxWidth="1100px">
        <Stack justifyContent={'center'} alignItems={'center'} mt={10} mb={10} spacing={10}>
          <Typography sx={{
            fontFamily: 'Arvo',
            color: 'white',
            textAlign: 'center'
          }}>
            All NFTs in this collection feature 222 unique black faces of all shapes, sizes and shades of black. <br /> Each NFT is a looped 12sec mp4 video with animated boxes depicting various interpretations of "Black Faces" in 7 African languages; <br /> <b> <i> Igbo, Yoruba, Hausa, Swahili, Xhosa, Shona & French. </i> </b>
          </Typography>
          <img src="/assets/pagebreak1.png" alt='pagebreak1' style={{ width: '130px', height: '60px' }} />
        </Stack>
        <Stack direction={isDesktop ? 'row' : 'column'} flexWrap={'wrap'} alignItems="center" justifyContent={'center'} mt={5} mb={5} spacing={3}>
          {
            [...Array(222)].map((value, i) => (
              <MotionInView variants={varFadeInUp} key={i}>
                <img style={{
                  width: '330px',
                  height: '470px',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}
                  src={
                    i + 1 < 10 ?
                      `https://gateway.pinata.cloud/ipfs/QmSozkdeJ2k8LYrpTBV8N6oXxAXNRM5RZs8Von3LeLZ1FP/NFT_00${i + 1}.jpg` :
                      i + 1 < 100 ?
                        `https://gateway.pinata.cloud/ipfs/QmSozkdeJ2k8LYrpTBV8N6oXxAXNRM5RZs8Von3LeLZ1FP/NFT_0${i + 1}.jpg` :
                        `https://gateway.pinata.cloud/ipfs/QmSozkdeJ2k8LYrpTBV8N6oXxAXNRM5RZs8Von3LeLZ1FP/NFT_${i + 1}.jpg`
                  }
                  alt="NFT_cover" />
              </MotionInView >
            )
            )
          }
        </Stack >
      </Container >
       
    </RootStyle >
  );
}
