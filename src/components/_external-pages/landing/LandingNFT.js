import React, { useEffect, useState } from 'react'
// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Stack, Container, Typography, Button, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, ButtonAnimate } from '../../animate';
// import VideoLooper from 'react-video-looper'
import { useLocation } from "react-router-dom"

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

export default function LandingNFT() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const location = useLocation()
  const index = String(location.pathname).substring(1, 4)
  const [data, setData] = useState(null)
  console.log("index =>", index)

  useEffect(() => {
    console.log("useEffect")
    fetch(`https://gateway.pinata.cloud/ipfs/QmQSHeTLGigMUpq3hhA5QnVabyEMaZtJYYiqb19SfZsyGd/${index}.json`)
      .then(res => res.json())
      .then(resJson => {
        console.log("resJson =>", resJson)
        setData(resJson)
      })
      .catch(err => {
        console.log("err =>", err)
      })
  }, [index])

  console.log("data =>", data)
  // console.log("social data =>", data.social[0])

  return (
    <RootStyle>
       
      <Container maxWidth="lg" mt={10}>
        <Stack alignItems="center" justifyContent={'center'} mt={5}>
          {/* <VideoLooper
            source={data.animation_url}
            autoplay={true}
            loop
            start={1}
            width={isDesktop ? '500px' : '330px'}
            height={isDesktop ? "700px" : '470px'}
            style={{
              backgroundColor: '#010101',
              borderRadius: '10px'
            }}
          />  */}
          <MotionInView variants={varFadeInUp}>
            {
              data ?
                <img src={data.image} alt="image_cover" style={{
                  width: isDesktop ? '500px' : '300px',
                  height: isDesktop ? '700px' : '470px'
                }} /> :
                <></>
            }
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <ButtonAnimate>
              <Button
                variant='outlined'
                href="https://opensea.io/collection/222-black-faces/"
                sx={{
                  marginTop: '30px',
                  marginBottom: '30px',
                  fontFamily: 'Arvo',
                  border: '1px solid #fdb215',
                  color: '#fdb215',
                  fontWeight: 'bold',
                  width: '150px',
                  height: '50px',
                  fontSize: '16px',
                  "&:hover": {
                    color: 'white'
                  }
                }}>
                BUY NOW
              </Button>
            </ButtonAnimate>
          </MotionInView>
        </Stack>

        {/* Section Separator */}
           

        {/* Social */}
        <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
          <Typography sx={{
            fontFamily: 'Arvo',
            textAlign: 'center',
            color: 'white'
          }}>
            Here's how engaging this artwork was on social media!
          </Typography>
          <Stack direction={isDesktop ? 'row' : 'column'} justifyContent={'center'} alignItems={'center'} spacing={5} mt={10} mb={5}>
            <Stack alignItems={'center'} spacing={2}>
              <img src="/assets/nft_instagram_icon.png" alt='pagebreak1' style={{ width: '130px', height: '130px' }} />
              <Typography sx={{
                fontFamily: 'Arvo',
                textAlign: 'center',
                color: 'white',
                fontSize: ''
              }}>
                INSTAGRAM REACH
              </Typography>
              <Typography sx={{
                fontFamily: 'Lakki',
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '30px'
              }}>
                {data ? data.social[0].instagram_reach : 0}
              </Typography>
              <ButtonAnimate>
                <Button
                  variant='outlined'
                  href={data ? data.social[0].instagram_link : ""}
                  target="_blank"
                  sx={{
                    fontFamily: 'Arvo',
                    border: '1px solid #fdb215',
                    color: '#fdb215',
                    width: '250px',
                    height: '50px',
                    fontSize: '15px',
                    "&:hover": {
                      color: 'white'
                    }
                  }}>
                  {
                    data && data.social[0].instagram_link !== "" ?
                      "VIEW INSTAGRAM POST" :
                      "No Link"
                  }
                </Button>
              </ButtonAnimate>
            </Stack>
            {/* Linkedin */}
            <Stack alignItems={'center'} spacing={2}>
              <img src="/assets/nft_linkedin_icon.png" alt='pagebreak1' style={{ width: '130px', height: '130px' }} />
              <Typography sx={{
                fontFamily: 'Arvo',
                textAlign: 'center',
                color: 'white',
                fontSize: ''
              }}>
                VIEW LINKEDIN POST
              </Typography>
              <Typography sx={{
                fontFamily: 'Lakki',
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '30px'
              }}>
                {data ? data.social[1].linkedin_views : 0}
              </Typography>
              <ButtonAnimate>
                <Button
                  variant='outlined'
                  href={data ? data.social[1].linkedin_link : ""}
                  target="_blank"
                  sx={{
                    fontFamily: 'Arvo',
                    border: '1px solid #fdb215',
                    color: '#fdb215',
                    width: '250px',
                    height: '50px',
                    fontSize: '15px',
                    "&:hover": {
                      color: 'white'
                    }
                  }}>
                  {
                    data && data.social[1].linkedin_link !== "" ?
                      "VIEW LINKEDIN POST" :
                      "No Link"
                  }
                </Button>
              </ButtonAnimate>
            </Stack>
          </Stack>
        </MotionInView>

        {/* Join */}
        <MotionInView variants={varFadeInUp}>
          <Stack justifyContent={'center'} alignItems={'center'} mt={10} mb={5}>
            <img src="/assets/pagebreak1.png" alt='pagebreak1' style={{ width: '130px', height: '60px' }} />
            <Typography sx={{
              fontFamily: 'Lakki',
              fontSize: '25px',
              marginTop: '30px',
              color: 'white',
              textAlign: 'center'
            }}>
              JOIN OUR DISCORD FOR UPDATES
            </Typography>
            <Button href="https://discord.gg/qvpeMmTPyV" target="_blank" sx={{
              backgroundColor: '#dc3d30',
              color: 'white',
              fontFamily: 'Arvo',
              width: '200px',
              height: '60px',
              borderRadius: '10px',
            }}>
              JOIN NOW
            </Button>
          </Stack>
        </MotionInView>
      </Container>
       
    </RootStyle>
  );
}
