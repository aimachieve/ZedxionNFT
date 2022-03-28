import React, { useRef, useState, useEffect } from 'react'
// material
import { styled, } from '@material-ui/core/styles';
import { Container, Typography, Stack, Link, Button, TextField, MenuItem, InputAdornment, Switch, Grid, Card, CardMedia, Box } from '@material-ui/core';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { varFadeInUp, MotionInView } from '../../components/animate';
import { create } from 'ipfs-http-client'
import { ethers } from 'ethers'
import { useSnackbar } from "notistack";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";

import { useWeb3React } from "@web3-react/core";
import { useNFTContract, useTokenContract } from 'hooks/useContract'
import ConnectWalletButton from 'components/DappComponents/ConnectWalletButton';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
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
// ----------------------------------------------------------------------

export default function InputInfo() {
  const axios = require('axios');
  const { account } = useWeb3React();

  const [imageUrl, setImageUrl] = useState(null)
  const [status, setStatus] = useState('Uploading Image To Pinata')
  const [disable, setDisable] = useState(false)
  const [metaData, setMetaData] = useState({
    'network': 'bsc',
    'image': '',
    'name': '',
    'description': '',
    'tags': '',
    'editions': 0,
    'royalties': 0,
    'sale': false,
    'saleMethod': 'fixed',
    'price': 0,
    'symbol': 'BUSD'
  })
  const [metadataUrl, setMetadataUrl] = useState(null)
  const [mintButton, setMintButton] = useState('Agree & Continue')
  const [mintingApproved, setMintingApproved] = useState(false)
  const [date, setDate] = React.useState(new Date());

  const uploadImgRef = useRef(null);
  const client = create('https://ipfs.infura.io:5001/api/v0')
  const { enqueueSnackbar } = useSnackbar();
  const NFTContract = useNFTContract(process.env.REACT_APP_NFT_CONTRACT_ADDRESS)
  console.log(NFTContract)
  const BUSDContract = useTokenContract(process.env.REACT_APP_BUSD_CONTRACT_ADDRESS)

  const onClickUpload = () => {
    uploadImgRef.current.click();
  }
  async function onUpload(e, type) {
    const file = e.target.files[0];
    // pinFileToIPFS(file);
    setStatus('uploading file...');
    setDisable(true)
    try {
      const added = await client.add(file)
      console.log(added);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      setImageUrl(url);
      setMetaData({ ...metaData, 'image': url });
      setStatus('Successfully uploaded !');
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
    setDisable(false)
  }
  const onMetaDataChange = (e) => {
    setMetaData({ ...metaData, [e.target.name]: e.target.value });
  }

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
  }, [account, BUSDContract])

  const handleMintingApprove = async () => {
    try {
      console.log("handleMintingApprove invoked!")
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
  const uploadMetadata = async () => {
    if (
      imageUrl === null ||
      metaData.name === "" ||
      metaData.tags === "" ||
      metaData.editions === 0 ||
      metaData.royalties === 0 ||
      metaData.price === 0 ||
      metaData.royalties === 0
    ) {
      enqueueSnackbar("Please fill all the fileds!", {
        variant: "error",
      })
    } else {
      setMintButton("Uploading metadata...")
      setDisable(true)
      const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
      //making axios POST request to Pinata ⬇️
      axios.post(url, metaData, {
        headers: {
          'Content-Type': 'application/json',
          pinata_api_key: process.env.REACT_APP_PINATA_KEY,
          pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET
        }
      })
        .then(function (response) {
          setMetadataUrl("https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash);

          enqueueSnackbar("Metadata is sucessufully uploaded!", {
            variant: "success",
          })
          setMintButton("Agree && Continue")
        })
        .catch(function (error) {
          enqueueSnackbar("Metadata uploading failed!", {
            variant: "error",
          })
          console.log("error:", error)
          setMintButton("metadata upload fail ⬇️, try again later!", error.message);
        });

      setDisable(false);
    }
  }

  const minting = async () => {
    setMintButton("NFT is minting now...")
    setDisable(true)
    try {
      await NFTContract.mintNFT(
        account,
        metadataUrl,
        Number(metaData.price),
        Number(metaData.royalties),
        metaData.saleMethod,
        String(date)
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

  const init = () => {
    setMetaData({
      'network': 'bsc',
      'image': '',
      'name': '',
      'description': '',
      'tags': '',
      'editions': 0,
      'royalties': 0,
      'sale': false,
      'saleMethod': 'fixed',
      'auctionDay': 1,
      'symbol': 'BUSD',
      'price': 0
    })
    setImageUrl(null)
    setMetadataUrl(null)
    setStatus('Uploading Image To Pinata')
    setMintButton('Uploading Metadata To Ipfs')
    setDisable(false)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <RootStyle>
        <Container maxWidth="md">
          <ContentStyle>
            <Grid
              container
              spacing={4}
            >
              <Grid item xs={12} md={8}>
                <MotionInView variants={varFadeInUp} >
                  <Stack
                    spacing={3}
                    mb={3}
                    sx={{ border: '1px solid rgb(255 255 255 / 15%)', borderRadius: '10px', padding: '20px' }}
                  >
                    <Typography variant="h3" textAlign={'left'} mb={3}>
                      Mint your NFT!
                    </Typography>
                    {/* Uploading image section */}
                    <Stack alignItems="center" spacing={1}>
                      <img src={imageUrl || '/assets/create/Placeholder.png'} width="70%" height="auto" alt="image" style={{ borderRadius: '10px' }} />
                      <>
                        <input type="file" ref={uploadImgRef} onChange={(e) => onUpload(e, "image")} hidden />
                        <Button variant="contained" disabled={disable} onClick={() => onClickUpload()} sx={{ border: '1px solid black', color: 'white' }}>{status}</Button>
                      </>
                      <Typography sx={{ fontSize: '12px' }}>
                        {imageUrl ?? imageUrl}
                      </Typography>
                    </Stack>

                    {/* Select Network */}
                    <TextField
                      select
                      label="Select Network"
                      inputProps={{ sx: { color: 'white' } }}
                      name="network"
                      value={metaData.network}
                      onChange={onMetaDataChange}
                    >
                      <MenuItem value="bsc">
                        <Stack
                          direction={'row'}
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}>
                          <img src="/assets/create/bsc-icon.png" alt="bsc-icon" style={{ height: 'auto', width: '20px' }} />
                          <Typography>Binance Smart Chain</Typography>
                        </Stack>
                      </MenuItem>
                      <MenuItem value="eth">
                        <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                          <img src="/assets/create/eth-icon.png" alt="eth-icon" style={{ height: '20px', width: '20px' }} />
                          <Typography>Ethereum</Typography>
                        </Stack>
                      </MenuItem>
                    </TextField>
                    {/* Title */}
                    <TextField
                      inputProps={{ sx: { color: 'white' } }}
                      label="Title"
                      helperText='* Give your collectible a name.'
                      name="name"
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
                      name="description"
                      value={metaData.description}
                      onChange={onMetaDataChange}
                    />
                    <TextField
                      inputProps={{ sx: { color: 'white' } }}
                      label="Tags"
                      helperText='* Add tags to help the item get discovered on the explore and search page. You may add up to 10 tags. Add up to 10 tags.'
                      name="tags"
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
                      name="editions"
                      value={metaData.editions}
                      onChange={onMetaDataChange}
                    />
                    <TextField
                      inputProps={{ sx: { color: 'white' } }}
                      label="Royalties"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Typography>%</Typography>
                          </InputAdornment>
                        )
                      }}
                      name="royalties"
                      value={metaData.royalties}
                      onChange={onMetaDataChange}
                    />
                    <Stack direction="row" justifyContent={'space-between'} alignItems="center">
                      <Typography variant="h6">List for sale</Typography>
                      <Switch
                        name="sale"
                        value={metaData.sale}
                        onChange={onMetaDataChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    </Stack>
                    <Stack
                      spacing={2}
                      sx={{
                        // display: !metaData.sale ? 'none' : ''
                      }}
                    >
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="fixed"
                          name="saleMethod"
                          value={metaData.saleMethod}
                          onChange={onMetaDataChange}
                        >
                          <FormControlLabel value="fixed" control={<Radio />} label="Fixed Price" />
                          <FormControlLabel value="auction" control={<Radio />} label="Auction" />
                        </RadioGroup>
                      </FormControl>
                      {/* Date picker */}
                      <DatePicker
                        label="Auction Day"
                        value={date}
                        onChange={(newValue) => {
                          console.log(newValue)
                          setDate(newValue);
                        }}
                        openTo="day"
                        views={['year', 'month', 'day']}
                        renderInput={(params) => <TextField {...params} />}
                        inputProps={{ sx: { color: 'white' } }}
                        disabled={metaData.saleMethod === 'fixed'}
                        minDate={new Date()}
                      />
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
                          name="symbol"
                          value={metaData.symbol}
                          onChange={onMetaDataChange}
                          sx={{ color: 'white', width: '50%' }}
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
                          name="price"
                          value={metaData.price}
                          onChange={onMetaDataChange}
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
                      account ?
                        mintingApproved ?
                          metadataUrl ?
                            < Button variant="contained" p="3" sx={{ color: "white" }} onClick={minting} disabled={disable}>
                              {mintButton}
                            </Button> :
                            < Button variant="contained" p="3" sx={{ color: "white" }} onClick={uploadMetadata} disabled={disable}>
                              Upload metadata
                            </Button> :
                          <Button variant="contained" p="3" sx={{ color: "white" }} onClick={handleMintingApprove}>
                            Approve
                          </Button> :
                        <Stack alignItems="center">
                          <ConnectWalletButton />
                        </Stack>
                    }
                    <Typography sx={{ fontSize: '12px' }}>
                      {metadataUrl ?? metadataUrl}
                    </Typography>
                  </Stack>
                </MotionInView>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
                  <CardMedia
                    component="img"
                    alt="NFT"
                    height="auto"
                    image={imageUrl || '/assets/create/Placeholder.png'}
                    sx={{ borderRadius: "10px" }}
                  />
                  <Stack sx={{ p: 3 }}>
                    <Typography gutterBottom variant="h5" component="div" mt={2} sx={{ textAlign: 'left' }}>
                      {metaData.name === '' ? "Name" : metaData.name}
                    </Typography>
                    <Typography gutterBottom component="div" sx={{ textAlign: 'left' }}>
                      {metaData.description === '' ? "Description" : metaData.description}
                    </Typography>
                    <Stack direction={'row'} spacing={1}>
                      <Typography sx={{ color: "#1066e7" }}>{metaData.price}</Typography>
                      <Typography>{metaData.symbol}</Typography>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle >
    </LocalizationProvider>
  );
}
