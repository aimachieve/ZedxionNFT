import * as React from 'react';
import { Box, IconButton, TextField, Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import { useWeb3React } from "@web3-react/core"
import ConnectWalletButton from "components/DappComponents/ConnectWalletButton"
import { useNFTContract } from 'hooks/useContract'
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";
import { useSnackbar } from "notistack"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#010101',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  color: 'white'
};

export default function SendIconButton({ tokenId }) {
  console.log(tokenId)
  const { account } = useWeb3React();
  const [open, setOpen] = React.useState(false);
  const [owner, setOwner] = React.useState(false);
  const [receiver, setReceiver] = React.useState(null)
  const NFTContract = useNFTContract(process.env.REACT_APP_NFT_CONTRACT_ADDRESS)
  const {enqueueSnackbar} = useSnackbar()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setReceiver(e.target.value)
  }

  React.useEffect(()=> {
    const init = async () => {
      const owner = await NFTContract.getOwnerOfNFT(tokenId)
      setOwner(owner)
      console.log('owner=>', owner)
    }

    init()
  })

  const sendNFT = async () => {
    console.log("account, receiver, tokenId", account, receiver, tokenId)
    try {
      await NFTContract.sendNFT(receiver, tokenId)

      enqueueSnackbar("NFT is sent successfully!", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(MetamaskErrorMessage(error), {
        variant: "error"
      })
    }
  }

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleOpen} sx={{ justifyContent: 'flex-start' }} disabled={owner !== account}>
        <SendIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={3}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sending your NFT to Another User
            </Typography>
            <TextField
              label="address"
              inputProps={{ sx: { color: 'white' } }}
              onChange={handleChange}
            />
            {
              account ?
                <Button
                  variant="contained"
                  sx={{ color: 'white' }}
                  endIcon={<SendIcon />}
                  onClick={sendNFT}
                >
                  Send
                </Button> :
                <Stack alignItems={'center'}>
                  <ConnectWalletButton />
                </Stack>
            }
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
