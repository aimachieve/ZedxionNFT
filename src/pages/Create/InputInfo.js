import React, { useRef, useState, useEffect } from 'react'
// material
import { styled, } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles'
import { Container, Typography, Stack, Link, Button, TextField, MenuItem, InputAdornment, Switch } from '@material-ui/core';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { varFadeInUp, MotionInView } from '../../components/animate';
import { create } from 'ipfs-http-client'
import { connectWallet, getETHContract, getBSCContract, getBUSDContract, getCurrentWalletBalance } from "../../utils/interact"

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
  },
}));

const useStyles = makeStyles({
  textField: `
    color: 'white'
  `
})
// ----------------------------------------------------------------------

export default function InputInfo() {
  const classes = useStyles();

  const [imageUrl, setImageUrl] = useState('')
  const [status, setStatus] = useState('Uploading Image To Pinata')
  const [disable, setDisable] = useState(true)
  const [metadataUrl, setMetadataUrl] = useState('')
  const [metaData, setMetaData] = useState({
    'network': 'bsc',
    'image': '',
    'name': '',
    'description': '',
    'tags': '',
    'editions': 0,
    'royalties': 0,
    'sale': false,
    'saleMethod': '',
    'price': 0,
    'symbol': ''
  })
  const [mintButton, setMintButton] = useState('Agree & Continue')
  const [walletAddress, setWalletAddress] = useState("");
  const [walletStatus, setWalletStatus] = useState("");
  const [chainId, setChainId] = useState(undefined);
  const [mintingApproved, setMintingApproved] = useState(false)

  const uploadImgRef = useRef(null);
  const client = create('https://ipfs.infura.io:5001/api/v0')
  const BSCContract = getBSCContract()
  const ETHContract = getETHContract()
  const BUSDContract = getBUSDContract()
  // const BUSDContract = useTokenContract(process.env.REACT_APP_BUSD_CONTRACT_ADDRESS)

  useEffect(async () => {
    // Wallet connect
    const result = await connectWallet();
    setWalletAddress(result.address);
    setWalletStatus(result.status);

    // Get Chain ID
    const _chainId = await window.ethereum.request({ method: 'eth_chainId' });
    setChainId(_chainId)
    console.log(_chainId)
  }, []);

  const onClickUpload = () => {
    uploadImgRef.current.click();
  }
  async function onUpload(e, type) {
    const file = e.target.files[0];
    // pinFileToIPFS(file);
    try {
      setStatus('uploading file...');
      const added = await client.add(file)
      console.log(added);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      setImageUrl(url);
      setMetaData({ ...metaData, 'image': url });
      setStatus('Successfully uploaded !');
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  const onMetaDataChange = (e) => {
    setMetaData({ ...metaData, [e.target.name]: e.target.value });
  }
  async function uploadMetadata(JSONBody) {
    console.log(JSONBody)
    if (metaData.name === "" || metaData.description === "" || metaData.price === 0 || metaData.royalty === 0 || imageUrl === "") {
      alert("Please fill all the fileds!")
    } else {
      setMetadataButton("Uploading metadata...")
      const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
      console.log(process.env.REACT_APP_PINATA_KEY, process.env.REACT_APP_PINATA_SECRET)
      //making axios POST request to Pinata ⬇️
      axios.post(url, JSONBody, {
        headers: {
          'Content-Type': 'application/json',
          pinata_api_key: process.env.REACT_APP_PINATA_KEY,
          pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET
        }
      })
        .then(function (response) {
          setMetadataUrl("https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash);
          setDisable(false);
        })
        .catch(function (error) {
          console.log("error:", error)
          setMetadataButton("metadata upload fail ⬇️, try again later!", error.message);
        });
    }
  }

  const init = () => {
    setDisable(true)
    setMetaData({
      'network': 'bsc',
      'image': '',
      'name': '',
      'description': '',
      'tags': '',
      'editions': 0,
      'royalties': 0,
      'sale': false,
      'price': 0,
      'symbol': ''
    })
    setImageUrl('')
    setStatus('Uploading Image To Pinata')
    setMintButton('Agree & Continue')
  }

  const minting = async () => {
    console.log("metadata url=>", metadataUrl)
    console.log("current account=>", walletAddress)
    console.log("metadata.price, pi=>", metaData.price, metaData.pi)
    console.log("metadata=>", metaData)
    console.log("number price=>", Number(metaData.price))

    setMintButton("NFT is minting now...")
    try {
      const result = await BSCContract.mintNFT(
        walletAddress,
        metadataUrl,
        Number(metaData.price),
        Number(metaData.pi)
      )
      enqueueSnackbar("WOW, One NFT was sucessufully minted!", {
        variant: "success",
      })
    } catch (error) {
      console.log("error: ", error)
      enqueueSnackbar(MetamaskErrorMessage(error), {
        variant: "error"
      })
    }

    init()
  }

  useEffect(() => {
    const checkMintingAllowance = async () => {
      try {
        const result = await BUSDContract.allowance(
          walletAddress,
          process.env.REACT_APP_BSC_CONTRACT_ADDRESS
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
  }, [walletAddress, BUSDContract])

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <MotionInView variants={varFadeInUp} style={{ marginTop: '100px' }}>
            <Stack spacing={3} mb={3} sx={{ border: '1px solid rgb(255 255 255 / 15%)', borderRadius: '10px', padding: '20px' }}>
              <Typography variant="h3" textAlign={'left'} mb={3}>
                Mint your NFT!
              </Typography>
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                id="outlined-select-network"
                select
                label="Select Network"
                helperText="* Please select your network."
                sx={{ color: 'white' }}
                className={classes.textField}
                value={metaData.network}
                onChange={onMetaDataChange}
              >
                <MenuItem value="bsc">
                  <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                    <img src="/assets/create/bsc-icon.png" alt="bsc-icon" style={{ height: 'auto', width: '15px' }} />
                    <Typography>Binance Smart Chain</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem value="eth">
                  <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                    <img src="/assets/create/eth-icon.png" alt="eth-icon" style={{ height: 'auto', width: '50px' }} />
                    <Typography>Ethereum</Typography>
                  </Stack>
                </MenuItem>
              </TextField>
              {/* Uploading image section */}
              <Stack alignItems="center" spacing={1}>
                <img src={imageUrl || '/assets/create/Placeholder.png'} width="70%" height="auto" alt="image" style={{ borderRadius: '10px' }} />
                <>
                  <input type="file" ref={uploadImgRef} onChange={(e) => onUpload(e, "image")} hidden />
                  <Button variant="contained" disabled={!disable} onClick={() => onClickUpload()} sx={{ border: '1px solid black', color: 'white' }}>{status}</Button>
                </>
              </Stack>
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                label="Title"
                helperText='* Give your collectible a name.'
                value={metaData.name}
                onChange={onMetaDataChange}
              />
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                multiline
                rows={5}
                label="Description :"
                fullWidth
                helperText="* Describe your Collectible."
                value={metaData.description}
                onChange={onMetaDataChange}
              />
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                label="Tags"
                helperText='* Add tags to help the item get discovered on the explore and search page. You may add up to 10 tags. Add up to 10 tags.'
                value={metaData.tags}
                onChange={onMetaDataChange}
              />
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                label="Editions"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography>edition</Typography>
                    </InputAdornment>
                  )
                }}
                value={metaData.editions}
                onChange={onMetaDataChange}
              />
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                label="Royalties"
                type="number"
                helperText="Royalties are optional and allow you to earn a percentage on secondary sales."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography>%</Typography>
                    </InputAdornment>
                  )
                }}
                value={metaData.royalties}
                onChange={onMetaDataChange}
              />
              <Stack direction="row" justifyContent={'space-between'} alignItems="center">
                <Typography variant="h6">List for sale</Typography>
                <Switch
                  value={metaData.sale}
                  onChange={onMetaDataChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </Stack>
              <Stack spacing={2} sx={{
                display: !metaData.sale ? 'none' : ''
              }}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={metaData.saleMethod}
                    onChange={onMetaDataChange}
                  >
                    <FormControlLabel value="fixed" control={<Radio />} label="Fixed Price" />
                    <FormControlLabel value="auction" control={<Radio />} label="Auction" />
                  </RadioGroup>
                </FormControl>
              </Stack>
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  type="number"
                  sx={{ textAlign: 'left' }}
                >
                  Price
                </Typography>

                <Stack direction="row" spacing={1} justifyContent="space-between">
                  <TextField
                    inputProps={{ sx: { color: 'white' } }}
                    id="outlined-select-token"
                    select
                    label="Select token"
                    value={metaData.symbol}
                    onChange={onMetaDataChange}
                    sx={{ color: 'white', width: '50%' }}

                    className={classes.textField}
                  >
                    <MenuItem value="BNB">
                      <Typography>BNB</Typography>
                    </MenuItem>
                    <MenuItem value="USDT">
                      <Typography>USDT</Typography>
                    </MenuItem>
                    <MenuItem value="BUSD">
                      <Typography>BUSD</Typography>
                    </MenuItem>
                    <MenuItem value="ZEDXION">
                      <Typography>ZEDXION</Typography>
                    </MenuItem>
                  </TextField>
                  <TextField
                    inputProps={{ sx: { color: 'white' } }}
                    label="price"
                    sx={{ width: '50%' }}
                  />
                </Stack>
              </Stack>
              <Typography>
                By selecting Agree & Continue below agree to Zedxion's
                <Link href="/terms">Terms of Service</Link> and
                <Link href="/privacy">Privacy Policy</Link>.
              </Typography>
              {
                walletAddress ?
                  <Button variant="contained" p="3" sx={{ color: "white" }} onClick={minting}>
                    {mintButton}
                  </Button> :
                  <Button variant="contained" p="3" sx={{ color: "white" }} onClick={connectWallet} >
                    Connect wallet
                  </Button>
              }
              <Typography>{walletStatus}</Typography>
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
