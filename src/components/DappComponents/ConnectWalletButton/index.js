import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import WalletModal from "./WalletModal";
import LogoutModal from "./LogoutModal";
import Fab from '@mui/material/Fab';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function ConnectWalletButton({ sx }) {
  const { account } = useWeb3React();
  console.log("account =>", account)
  const [openLogin, setOpenLogin] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const { login, logout } = useAuth();

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenLogout = () => {
    setOpenLogout(true);
  };
  const handleCloseLogout = () => {
    setOpenLogout(false);
  };
  return (
    <>
      {account ? (
        <Fab
          color="primary"
          aria-label="add"
          sx={{ width: 'auto', height: '47px', mr: 2, p: 2 }}
          onClick={handleOpenLogout}
        >
          <AccountBalanceWalletIcon />
          {`${account.slice(0, 5)}...${account.slice(-5)}`}
        </Fab>
      ) : (
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            width: '47px',
            height: '47px',
            mr: 2,
            "&:hover": {
              backgroundPostionX: "-160px",
            },
          }}
          onClick={handleOpenLogin}
        >
          <AccountBalanceWalletIcon />
        </Fab>
      )}

      <WalletModal login={login} open={openLogin} onClose={handleCloseLogin} />
      <LogoutModal
        logout={logout}
        open={openLogout}
        onClose={handleCloseLogout}
      />
    </>
  );
}
