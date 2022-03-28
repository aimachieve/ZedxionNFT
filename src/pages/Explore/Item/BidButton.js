import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import GavelIcon from '@mui/icons-material/Gavel';
import ConnectWalletButton from 'components/DappComponents/ConnectWalletButton';
import { useSnackbar } from 'notistack';
import { useWeb3React } from '@web3-react/core';
// Contract
import { useTokenContract, useNFTContract } from 'hooks/useContract'
import { ethers } from "ethers";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    background: '#010101',
    color: 'white',
    width: '400px',
    border: '1px solid #2a3c51'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, fontSize: '25px', background: '#010101', color: 'white' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ tokenId, info }) {
  console.log(info)
  const { account } = useWeb3React()
  const [open, setOpen] = React.useState(false);
  const [price, setPrice] = React.useState(0)
  const [owner, setOwner] = React.useState(null)
  const [bids, setBids] = React.useState(null)
  const [mintingApproved, setMintingApproved] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const BUSDContract = useTokenContract(process.env.REACT_APP_BUSD_CONTRACT_ADDRESS)
  const NFTContract = useNFTContract(process.env.REACT_APP_NFT_CONTRACT_ADDRESS)


  useEffect(() => {
    const checkMintingAllowance = async () => {
      try {
        if (account) {
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
        }
      } catch (error) {
        console.log("Error:", error);
        setMintingApproved(false);
      }
    };

    checkMintingAllowance()
  }, [])

  useEffect(() => {
    const init = async () => {
      const owner = await NFTContract.getOwnerOfNFT(tokenId)
      setOwner(owner)

      const bids = await NFTContract.getBid(tokenId)
      console.log("bids=>", bids)
      setBids(bids)
    }

    init()
  }, [])

  const handleMintingApprove = async () => {
    const result = bids.filter((bid) => {
      console.log(account, bid[0])

      return bid[0] == account
    })
    console.log("result=>", result)

    if (result.length > 0)
      enqueueSnackbar("You have already bidded on this NFT!", {
        variant: "error",
      });
    else
      try {
        const mintingApprovedResult = await BUSDContract.approve(
          process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
          ethers.constants.MaxUint256
        );
        enqueueSnackbar("Approved successfully!", {
          variant: "success",
        });
        setMintingApproved(true);
      } catch (error) {
        console.error("Error:", error);
        setMintingApproved(false);
      }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setPrice(e.target.value)
  }
  const placeBid = async () => {
    const result = bids.filter((bid) => {
      console.log(account, bid[0])

      return bid[0] == account
    })
    console.log("result=>", result)

    if (result.length > 0)
      enqueueSnackbar("You have already bidded on this NFT!", {
        variant: "error",
      });
    else if (Number(price) < info.price) {
      enqueueSnackbar(
        `You must bid at least ${info.price} !`, {
        variant: 'error',
      })
    } else {
      try {
        await NFTContract.placeBid(tokenId, account, Number(price), String(new Date()))

        enqueueSnackbar("Bid successfully done!", {
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
  }

  return (
    <div>
      <Button
        sx={{ width: '100', borderRadius: "20px", color: "white", width: "150px", p: 1.2 }}
        color="primary"
        variant="contained"
        startIcon={<GavelIcon />}
        onClick={handleClickOpen}
        disabled={owner === account}
      >
        Bid
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Place a Bid
        </BootstrapDialogTitle>
        {/* <Divider /> */}
        <DialogContent dividers>
          <Stack spacing={3} m={3}>
            <TextField
              label="Your Bid Price"
              fullWidth
              value={price}
              onChange={handleChange}
              type="number"
              InputProps={{
                inputProps: {
                  min: info.price,
                  sx: { color: 'white' }
                }
              }}
            />
            <Stack direction="row" justifyContent={'space-between'}>
              <Typography >
                You must bid at least:
              </Typography>
              <Typography >
                {info.price + info.symbol}
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
        {/* <Divider /> */}
        <DialogActions sx={{ background: '#010101' }}>
          {
            account ?
              mintingApproved ? (
                <Button
                  sx={{ width: 100, borderRadius: "20px", color: "white", width: "150px", p: 1.2 }}
                  color="primary"
                  variant="contained"
                  startIcon={<GavelIcon />}
                  onClick={placeBid}
                >
                  Place a Bid
                </Button>
              ) : (
                <Button variant="contained" sx={{ border: '1px solid black' }} onClick={() => handleMintingApprove()}>
                  Approve
                </Button>
              ) :
              <ConnectWalletButton />
          }
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
