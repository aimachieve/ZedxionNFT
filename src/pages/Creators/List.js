import React, { useState } from "react"
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Avatar, Button, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import Card from '@mui/material/Card';
import Pagination from '@mui/material/Pagination';

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
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          {/* List */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid
              container
              spacing={2}
            >
              {
                [...Array(12)].map((value, index) => (
                  <Grid item xs={12} md={3}>
                    <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
                      <Stack
                        alignItems={'center'}
                        justifyContent="flex-end"
                        sx={{ background: `url(https://shreethemes.in/superex/layouts/images/work/${index + 1}.jpg)`, height: '150px' }}
                      >
                        <Avatar src={
                          index + 1 < 10 ?
                            `https://shreethemes.in/superex/layouts/images/client/0${index + 1}.jpg` :
                            `https://shreethemes.in/superex/layouts/images/client/${index + 1}.jpg`
                        }
                          alt="avartar"
                          sx={{ width: '100px', height: '100px', border: '3px solid #495057' }}
                        />
                      </Stack>
                      <Stack sx={{ pb: 1 }} alignItems={'center'} spacing={1}>
                        <Typography gutterBottom variant="h5" component="div" mt={3}>
                          Creator {index + 1}
                        </Typography>
                        <Typography sx={{ color: "#b9c6d8" }}>
                          @Creator {index + 1}
                        </Typography>
                        <Button variant="outlined">Follow</Button>
                      </Stack>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>
          </MotionInView>
          {/* Pagination */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '100px' }}>
            <Stack alignItems={'center'} sx={{color: 'white'}}>
            <Typography>Page: {page}</Typography>
            <Pagination sx={{ color: 'white' }} count={10} page={page} onChange={handleChange} />
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
