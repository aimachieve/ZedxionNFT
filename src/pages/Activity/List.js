// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Avatar, Button, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

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
              <Grid item xs={12} md={6}>
                {
                  [...Array(8)].map((value, index) => (
                    <Stack
                      key={index}
                      direction="row"
                      spacing={2}
                      mt={2}
                      alignItems="center"
                      sx={{ border: "1px solid rgb(255 255 255 / 15%)", borderRadius: '10px', p: 3 }}
                    >
                      <img src={`https://shreethemes.in/superex/layouts/images/items/${index + 1}.jpg`}
                        alt="avartar"
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                      />
                      <Stack >
                        <Typography variant="h5">Digital Art Collection</Typography>
                        <Typography sx={{ fontSize: '15px', color: "#b9c6d8" }}>
                          Started Following <span style={{ color: "primary" }}>@Panda</span>
                        </Typography>
                        <Typography sx={{ fontSize: '15px', color: "#b9c6d8" }}>
                          1 hours ago
                        </Typography>
                      </Stack>
                    </Stack>
                  ))
                }

                <Button sx={{ mt: 5, ml: '50%' }} endIcon={<ArrowRightAltIcon />}>Load More</Button>
              </Grid>
              <Grid item xs={12} md={6} >
                <Typography variant="h5">Filters</Typography>
                <Stack
                  spacing={2}
                  mt={2}
                  sx={{ border: "1px solid rgb(255 255 255 / 15%)", borderRadius: '10px', p: 3 }}
                >
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      startIcon={<AccountBalanceWalletIcon />}
                    >
                      Purchased
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<LocalOfferIcon />}
                    >
                      Sales
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<LocalFireDepartmentIcon />}
                    >
                      Burns
                    </Button>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      startIcon={<FavoriteBorderIcon />}
                    >
                      Likes
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<WebAssetIcon />}
                    >
                      Bids
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<PeopleOutlineIcon />}
                    >
                      Following
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<FilterListIcon />}
                    >
                      Listing
                    </Button>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      startIcon={<QueueMusicIcon />}
                    >
                      Music
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<CameraAltIcon />}
                    >
                      Video
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DriveFileRenameOutlineIcon />}
                    >
                      Illustration
                    </Button>
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
