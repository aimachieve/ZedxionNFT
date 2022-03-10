import React from 'react'
// material
import { styled, useTheme } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import { Container, Typography, Stack, Button, InputBase, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';

import { connectWallet, getTotalSupply, getContract, getCurrentWalletBalance } from "../../../utils/interact"
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
  textAlign: 'center',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));
// ----------------------------------------------------------------------

export default function LandingMintNFT() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const [amount, setAmount] = React.useState(1)
  const [status, setStatus] = React.useState("")
  const [chainId, setChainId] = useState(undefined);
  const [totalSupply, setTotalSupply] = useState(0);
  const [claimingNft, setClaimingNft] = useState(false);
  const [balance, setBalance] = useState(0)

  const [walletAddress, setWalletAddress] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    // Wallet connect
    const result = await connectWallet();
    setWalletAddress(result.address);
    setStatus(result.status);

    // Get Chain ID
    const _chainId = await window.ethereum.request({ method: 'eth_chainId' });
    setChainId(_chainId)
    console.log(_chainId)

    const _totalSupply = await getTotalSupply()
    setTotalSupply(_totalSupply)
    
    const _balance = await getCurrentWalletBalance(result.address)
    console.log("wallet balance:", _balance)
    setBalance(_balance)
  }, []);

  const handleChangeAmount = (flag) => {
    if (flag === "plus") {
      if (amount < 20 )
        setAmount(amount + 1)
    } else {
      if (amount > 0)
        setAmount(amount - 1)
    }
  }

  const handleMint = async (e) => {
    e.preventDefault()

    if (chainId !== '0x1') {
      setStatus('😥 Error: Please select the Ethereum main net!')
    } else if (balance < 1 * amount) {
      setStatus(`😥 Error: Insufficent funds! Current balance: ${balance} ETH, total minting cost(${amount} NFTs): ${1 * amount} ETH !`)
    } else {
      let cost = 1000000000000000000;
      let gasLimit = 285000;
      let totalCostWei = String(cost * amount);
      let totalGasLimit = String(gasLimit * amount);

      const Zedxion = await getContract()
      console.log("Zedxion=>", Zedxion)
      
      setClaimingNft(true);
      setStatus("NFT(s) minting now...");

      Zedxion.methods
        .mint(walletAddress, amount)
        .send({
          gasLimit: String(totalGasLimit),
          to: "0x9787e5ca192ae9BE424F2C25527f5A8e898B3Ca0",
          from: walletAddress,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setStatus("😥 Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then(async (receipt) => {
          console.log(receipt);
          setStatus(
            `WOW, the "Blackfaces NFT" is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);

          const _totalSupply = await getTotalSupply()
          setTotalSupply(_totalSupply)
        });
    }
  }

  return (
    <RootStyle>
         
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack justifyContent={'center'} alignItems={'center'}>
              <Typography sx={{
                fontFamily: 'Lakki',
                fontSize: '30px',
                fontWeight: 'bold'
              }}>
                Minting NFTs
              </Typography>
              <Stack alignItems="center" mt={3}>
                <Typography sx={{
                  fontFamily: 'Arvo',
                  marginBottom: '20px',
                  alignItems: 'center'
                }}>
                  Total Minted:
                  <span>  </span>
                  <b style={{
                    color: '#fdb215',
                    fontSize: 25
                  }}>
                    {totalSupply} / 222
                  </b>
                </Typography>
                <Typography sx={{
                  fontFamily: 'Arvo',
                  marginBottom: '20px'
                }}>
                  1 ETH + Gas fee
                </Typography>
                <Typography sx={{
                  fontFamily: 'Arvo',
                  marginBottom: '20px'
                }}>
                  Max 20 Black Faces per transaction
                </Typography>
              </Stack>
              <Stack direction={isDesktop ? 'row' : 'column'} spacing={1} sx={{ mt: 5 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    bgcolor: "#0e1f13",
                    border: "1px solid #fdb215",
                    color: ' #fdb215',
                    p: "6px",
                  }}
                >
                  <Button
                    onClick={() => handleChangeAmount("minus")}
                    sx={{
                      minWidth: 36,
                      height: 36,
                      bgcolor: "black",
                      borderRadius: 0,
                      fontSize: 30,
                    }}
                  >
                    <span> - </span>
                  </Button>
                  <InputBase
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    inputProps={{ sx: { textAlign: "center" } }}
                    sx={{ height: 36, width: 160, fontWeight: "bold", color: ' #fdb215', fontSize: 30 }}
                  />
                  <Button
                    onClick={() => handleChangeAmount("plus")}
                    sx={{
                      minWidth: 36,
                      height: 36,
                      bgcolor: "black",
                      borderRadius: 0,
                      fontSize: 30,
                    }}
                  >
                    <span> + </span>
                  </Button>
                </Stack>
                <Stack direction="row" justifyContent={'center'} spacing={1} sx={{ mt: 5 }}>
                  <Button
                    onClick={() => setAmount(5)}
                    sx={{
                      border: "1px solid #fdb215",
                      color: ' #fdb215',
                      bgcolor: "#0e1f13",
                      minWidth: 52,
                      height: 52,
                      borderRadius: 0,
                      fontSize: 20,
                    }}
                  >
                    5
                  </Button>
                  <Button
                    onClick={() => setAmount(10)}
                    sx={{
                      border: "1px solid #fdb215",
                      color: ' #fdb215',
                      bgcolor: "#0e1f13",
                      minWidth: 52,
                      height: 52,
                      borderRadius: 0,
                      fontSize: 20,
                    }}
                  >
                    10
                  </Button>
                  <Button
                    onClick={() => setAmount(20)}
                    sx={{
                      border: "1px solid #fdb215",
                      color: ' #fdb215',
                      bgcolor: "#0e1f13",
                      minWidth: 52,
                      height: 52,
                      borderRadius: 0,
                      fontSize: 20,
                    }}
                  >
                    20
                  </Button>
                </Stack>
              </Stack>
              <Button onClick={
                walletAddress.length > 0 ?
                  handleMint : connectWallet
              } sx={{
                backgroundColor: '#dc3d30',
                color: 'white',
                fontFamily: 'Arvo',
                width: '200px',
                height: '60px',
                borderRadius: '10px',
                marginBottom: '30px',
                marginTop: '20px'
              }}>
                {
                  claimingNft ?
                    'Minting NFTs...' :
                    walletAddress.length > 0 ? (
                      'Mint( ' +
                      String(walletAddress).substring(0, 6) +
                      '...' +
                      String(walletAddress).substring(38) +
                      ')'
                    ) : (
                      <span>🦊 Connect Wallet</span>
                    )
                }
              </Button>
              <Typography sx={{
                fontFamily: 'Arvo',
                marginBottom: '20px'
              }}>
                {status}
              </Typography>
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
