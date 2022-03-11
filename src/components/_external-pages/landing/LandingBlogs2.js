// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Box } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
// import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LayersIcon from '@mui/icons-material/Layers';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // padding: theme.spacing(8, 0),
  background: '#010101',
  color: '#ffffff'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
  }
}));
// ----------------------------------------------------------------------

export default function LandingBlogs2() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={3}>
              <Typography sx={{
                fontSize: '40px',
              }}>Latest Blogs</Typography>
              <Typography sx={{
                color: "#b9c6d8"
              }}>
                We are a huge marketplace dedicated to connecting great artists of all Superex <br /> with their fans and unique token collectors!
              </Typography>
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid
              container
              justifyContent={{ xs: 'center', md: 'space-between' }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              <Grid item xs={12} md={3}>
                <Stack alignItems={'center'} spacing={3}>
                  <Stack alignItems="center" justifyContent="center" sx={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    background: 'rgba(16,102,231,0.1)',
                    borderRadius: '15px'
                  }}>
                    <CreditScoreIcon sx={{ color: "#1066e7", width: '40px', height: '40px' }} />
                  </Stack>
                  <Typography sx={{ fontSize: '22px' }}>Set up your wallet</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start working with Superex NFTs that can provide everything
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stack alignItems={'center'} spacing={3}>
                  <Stack alignItems="center" justifyContent="center" sx={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    background: 'rgba(16,102,231,0.1)',
                    borderRadius: '15px'
                  }}>
                    <LayersIcon sx={{ color: "#1066e7", width: '40px', height: '40px' }} />
                  </Stack>
                  <Typography sx={{ fontSize: '22px' }}>Buy your collection</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start working with Superex NFTs that can provide everything
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stack alignItems={'center'} spacing={3}>
                  <Stack alignItems="center" justifyContent="center" sx={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    background: 'rgba(16,102,231,0.1)',
                    borderRadius: '15px'
                  }}>
                    <AccountBalanceWalletIcon sx={{ color: "#1066e7", width: '40px', height: '40px' }} />
                  </Stack>
                  <Typography sx={{ fontSize: '22px' }}>Add your NFT's</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start working with Superex NFTs that can provide everything
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stack alignItems={'center'} spacing={3}>
                  <Stack alignItems="center" justifyContent="center" sx={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    background: 'rgba(16,102,231,0.1)',
                    borderRadius: '15px'
                  }}>
                    <LayersIcon sx={{ color: "#1066e7", width: '40px', height: '40px' }} />
                  </Stack>
                  <Typography sx={{ fontSize: '22px' }}>Sell Your NFT's</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start working with Superex NFTs that can provide everything
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
