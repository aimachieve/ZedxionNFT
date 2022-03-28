import React, { useEffect, useState } from 'react'
// material
import { styled } from '@material-ui/core/styles';
import { Stack, Container, Typography, Button, Grid } from '@material-ui/core';
import { varFadeInUp, MotionInView } from 'components/animate';
import { useLocation } from "react-router-dom"
import Countdown from 'react-countdown';
import GavelIcon from '@mui/icons-material/Gavel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DetailsTab from "./BidDetailsTab"
import RelatedItems from "./RelatedItems"
// For tab
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Avatar from '@mui/material/Avatar';
import SendIconButton from './SendIconButton'
// Contract
import { useTokenContract, useNFTContract } from 'hooks/useContract'
import { ethers } from "ethers";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";
import { useSnackbar } from "notistack";
import { useWeb3React } from "@web3-react/core";
import ConnectWalletButton from 'components/DappComponents/ConnectWalletButton';

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
  const location = useLocation()
  const pathArray = location.pathname.split('/')
  const tokenId = pathArray[pathArray.length - 1]

  const [data, setData] = useState(null)
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [mintingApproved, setMintingApproved] = useState(false)
  const { account } = useWeb3React();

  const { enqueueSnackbar } = useSnackbar();
  const BUSDContract = useTokenContract(process.env.REACT_APP_BUSD_CONTRACT_ADDRESS)
  const NFTContract = useNFTContract(process.env.REACT_APP_NFT_CONTRACT_ADDRESS)

  useEffect(() => {
    const init = async () => {
      const NFT = await NFTContract.getNFT(tokenId)

      fetch(NFT[1])
        .then(res => res.json())
        .then(resJson => {
          console.log("resJson =>", resJson)
          setData(resJson)
        })
        .catch(err => {
          console.log("err =>", err)
        })
    }

    init()
  }, [])

  useEffect(() => {
    const checkMintingAllowance = async () => {
      try {
        const result = await BUSDContract.allowance(
          account,
          process.env.REACT_APP_NFT_CONTRACT_ADDRESS
        );
        const allowedBalance = ethers.utils.formatUnits(result);

        console.log("allowedBalance =>", allowedBalance)
        if (allowedBalance > 0) {
          setMintingApproved(true);
        } else {
          setMintingApproved(false);
        }
      } catch (error) {
        console.log("Error:", error);
        setMintingApproved(false);
      }
    };

    checkMintingAllowance()
  }, [])

  const handleMintingApprove = async () => {
    try {
      const mintingApprovedResult = await BUSDContract.approve(
        process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
        ethers.constants.MaxUint256
      );
      console.log("mintingApprovedResult =>", mintingApprovedResult);
      enqueueSnackbar("Approved successfully!", {
        variant: "success",
      });
      setMintingApproved(true);
    } catch (error) {
      console.error("Error:", error);
      enqueueSnackbar(error, {
        variant: "error",
      });
      setMintingApproved(false);
    }
  };

  const buyNFT = async (tokenId, price) => {
    console.log("tokeId, Price", tokenId, price)
    try {
      await NFTContract.buyNFT(tokenId, price)

      enqueueSnackbar("NFT is yours!", {
        variant: "success",
      });
    } catch (error) {
      console.log("error:", error)
      enqueueSnackbar(MetamaskErrorMessage(error), {
        variant: "error"
      })
      enqueueSnackbar("Please refresh the page!", {
        variant: "info"
      })
    }
  }

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
              src={data?.image}
              alt="NFT"
              style={{ borderRadius: '10px', width: 'auto', height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionInView variants={varFadeInUp}>
              <Stack spacing={3}>
                <SendIconButton tokenId={tokenId} />
                {/* Title */}
                <Typography variant='h3'>
                  {data?.name}
                </Typography>
                {/* Bid content */}
                <Stack direction={'row'} justifyContent={'space-between'}>
                  {
                    data && data.saleMethod === 'fixed' ?
                      <Typography variant="h5">
                        {data?.price + data?.symbol}
                      </Typography> :
                      <Stack spacing={1}>
                        <Typography variant="h5"> Current Bid </Typography>
                        <Typography variant="h4">
                          {data?.price + data?.symbol}
                        </Typography>
                      </Stack>
                  }
                  <Stack spacing={1} sx={{ display: data?.saleMethod === 'fixed' ? 'none' : '' }}>
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
                    sx={{ width: 100, borderRadius: "20px", color: "white", width: "150px", p: 1.2, display: data?.saleMethod === 'fixed' ? 'none' : '' }}
                    color="primary"
                    variant="contained"
                    startIcon={<GavelIcon />}
                  >
                    Bid
                  </Button>
                  {
                    account ?
                      mintingApproved ? (
                        <Button
                          sx={{ width: 100, borderRadius: "20px", color: "white", width: "150px", p: 1.2 }}
                          color="primary"
                          variant="contained"
                          startIcon={<ShoppingCartIcon />}
                          onClick={() => { buyNFT(tokenId, data?.price) }}
                        >
                          Buy Now
                        </Button>
                      ) : (
                        <Button variant="contained" sx={{ border: '1px solid black' }} onClick={() => handleMintingApprove()}>
                          Approve
                        </Button>
                      ) :
                      <ConnectWalletButton />
                  }
                </Stack>
                {/* Dtails Tab */}
                {/* <DetailsTab /> */}

                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Details" value="1" sx={{ fontSize: "20px" }} />
                        <Tab label="Bids" value="2" sx={{ fontSize: "20px" }} />
                        <Tab label="Activity" value="3" sx={{ fontSize: "20px" }} />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <Typography sx={{ color: "#b9c6d8", mt: 2 }}>
                        {data?.description}
                      </Typography>
                      <Stack mt={3} spacing={1}>
                        <Typography variant="h5">Owner</Typography>
                        <Stack direction="row" spacing={1} alignItems={'center'}>
                          <Avatar src="https://shreethemes.in/superex/layouts/images/client/09.jpg"
                            alt="avartar"
                            sx={{ width: '40px', height: '40px' }}
                          />
                          <Typography variant="h5">PandaOne</Typography>
                        </Stack>
                      </Stack>
                    </TabPanel>
                    {/* Bids Tab */}
                    <TabPanel value="2">
                      <Stack direction="row" spacing={2} mt={2}>
                        <Avatar src="https://shreethemes.in/superex/layouts/images/client/01.jpg"
                          alt="avartar"
                          sx={{ width: '54px', height: 'auto' }}
                        />
                        <Stack >
                          <Typography variant="h5">2 WETH by 0xe849fa28a...ea14</Typography>
                          <Typography sx={{ fontSize: '15px', color: "#b9c6d8" }}>6 hours ago</Typography>
                        </Stack>
                      </Stack>
                    </TabPanel>
                    {/* Activity Tab */}
                    <TabPanel value="3">
                      <Stack direction="row" spacing={2} mt={2} alignItems="center" sx={{ border: "1px solid rgb(255 255 255 / 15%)", borderRadius: '10px', p: 3 }}>
                        <img src="https://shreethemes.in/superex/layouts/images/items/1.jpg"
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
                    </TabPanel>
                  </TabContext>
                </Box>
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>

        {/* Related Items */}
        {/* <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
          <RelatedItems />
        </MotionInView> */}
      </Container>
    </RootStyle>
  );
}
