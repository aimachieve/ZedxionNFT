// scroll bar
import 'simplebar/src/simplebar.css';

import { Web3ReactProvider } from '@web3-react/core';
import { SnackbarProvider } from 'notistack';
import { getLibrary } from 'utils/web3React';
// import LoadingScreen from 'components/LoadingScreen';
import Grow from '@mui/material/Grow';
// ----------------------------------------------------------------------

const Providers = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        TransitionComponent={Grow}
      >
        {children}
      </SnackbarProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
