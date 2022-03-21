import React, { useState } from 'react'
// material
import { styled, } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles'
import { Container, Typography, Stack, Link, Button, TextField, MenuItem, InputAdornment, Switch } from '@material-ui/core';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { varFadeInUp, MotionInView } from '../../components/animate';

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

  const [network, setNetwork] = useState('bsc');
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState('fixed');
  const [token, setToken] = useState('BNB');
  const handleChange = (event) => {
    setNetwork(event.target.value);
  };
  const handleChecked = (event) => {
    setChecked(event.target.checked)
  }
  const handleRadio = (event) => {
    setRadio(event.target.value);
  };
  const handleToken = (event) => {
    setToken(event.target.value);
  };

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
                value={network}
                onChange={handleChange}
                helperText="* Please select your network."
                sx={{ color: 'white' }}
                className={classes.textField}
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
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                label="Title"
                helperTex='* Give your collectible a name.' />
              <TextField
                inputProps={{ sx: { color: 'white' } }} multiline rows={5} label="Description :" fullWidth helperText="* Describe your Collectible." />
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                label="Tags"
                helperTex='* Add tags to help the item get discovered on the explore and search page. You may add up to 10 tags. Add up to 10 tags.' />
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                label="Editions"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography>edition</Typography>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                inputProps={{ sx: { color: 'white' } }}
                label="Royalties"
                helperText="Royalties are optional and allow you to earn a percentage on secondary sales."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography>%</Typography>
                    </InputAdornment>
                  )
                }}
              />
              <Stack direction="row" justifyContent={'space-between'} alignItems="center">
                <Typography variant="h6">List for sale</Typography>
                <Switch
                  checked={checked}
                  onChange={handleChecked}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </Stack>
              <Stack spacing={2} sx={{
                display: !checked ? 'none' : ''
              }}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={radio}
                    onChange={handleRadio}
                  >
                    <FormControlLabel value="fixed" control={<Radio />} label="Fixed Price" />
                    <FormControlLabel value="auction" control={<Radio />} label="Auction" />
                  </RadioGroup>
                </FormControl>
                <Stack spacing={2}>
                  <Typography variant="h7" sx={{ textAlign: 'left' }}>Price</Typography>

                  <Stack direction="row" spacing={1} justifyContent="space-between">
                    <TextField
                      inputProps={{ sx: { color: 'white' } }}
                      id="outlined-select-token"
                      select
                      label="Select token"
                      value={token}
                      onChange={handleToken}
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
              </Stack>
              <Typography>By selecting Agree & Continue below agree to Zedxion's <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>.</Typography>
              <Button variant="contained" p="3">Agree & Continue </Button>
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
