require("dotenv").config();
var Web3 = require("web3");

const bscContractABI = require("./bscContract.json");
const bscContractAddress = "0x88Dd8d513fE749C985e613233E03864dA6826408";
const ethContractABI = require("./ethContract.json");
const ethContractAddress = "0x88Dd8d513fE749C985e613233E03864dA6826408";
const busdContractABI = require("./busdContract.json");
const busdContractAddress = "0xB0D0eDB26B7728b97Ef6726dAc6FB7a43d6043E1";

export const getWeb3 = async () => {
  return new Web3(window.web3.currentProvider);
}

export const getBSCContract = async () => {
  const web3 = await getWeb3()
  const contract = new web3.eth.Contract(bscContractABI, bscContractAddress);
  // console.log("contract=>", contract)
  return contract
}

export const getETHContract = async () => {
  const web3 = await getWeb3()
  const contract = new web3.eth.Contract(ethContractABI, ethContractAddress);
  // console.log("contract=>", contract)
  return contract
}

export const getBUSDContract = async () => {
  const web3 = await getWeb3()
  const contract = new web3.eth.Contract(busdContractABI, busdContractAddress);
  // console.log("contract=>", contract)
  return contract
}

export const getTotalSupply = async () => {
  const zedxionContract = await getContract()
  var totalSupply = await zedxionContract.methods.totalSupply().call();
  return totalSupply;
};

// export const loadTotalMintCount = async () => {
//   var message = await zedxionContract.methods.totalMint().call();
//   return message;
// };

// export const getCurrentMessage = async () => {
//   var message = await zedxionContract.methods.message().call();
//   return message;
// };

/** Connect to Metamask */
export const connectWallet = async () => {
  if (window.ethereum) {
    window.ethereum.on('chainChanged', handleChainChanged);
    function handleChainChanged(_chainId) {
      // We recommend reloading the page, unless you must do otherwise
      window.location.reload();
    }

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    // For now, 'eth_accounts' will continue to always return an array
    function handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
      } else if (accounts[0]) {
        // currentAccount = accounts[0];
        window.location.reload()
        // Do any other work!
      }
    }

    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      const obj = {
        status: "👆🏽 Ready to mint NFT !",
        address: addressArray[0],
        success: true
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
        success: false
      };
    }
  } else {
    return {
      address: "",
      success: false,
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://metamask.io/download.html`}
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      )
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts"
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Ready to mint NFT !"
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button."
        };
      }
    } catch (err) {
      return { address: "", status: "😥 " + err.message };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://metamask.io/download.html`}
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      )
    };
  }
};

// export const updateMessage = async (address, message) => {
//   //input error handling
//   if (!window.ethereum || address === null) {
//     return {
//       status:
//         "💡 Connect your Metamask wallet to update the message on the blockchain."
//     };
//   }

//   if (message.trim() === "") {
//     return {
//       status: "❌ Your message cannot be an empty string."
//     };
//   }
//   //set up transaction parameters
//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: address, // must match user's active address.
//     data: zedxionContract.methods.update(message).encodeABI()
//   };

//   //sign the transaction
//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters]
//     });
//     return {
//       status: (
//         <span>
//           ✅{" "}
//           <a
//             rel="noreferrer"
//             target="_blank"
//             href={`https://rinkeby.etherscan.io/tx/${txHash}`}
//           >
//             View the status of your transaction on Etherscan!
//           </a>
//           <br />
//           ℹ️ Once the transaction is verified by the network, the message will
//           be updated automatically.
//         </span>
//       )
//     };
//   } catch (error) {
//     return {
//       status: "😥 " + error.message
//     };
//   }
// };

// export const mint222BlackFaces = async (address, mintCount, nftPrice) => {
//   console.log("parameter price==", nftPrice);
//   const correctPrice = web3.utils.toBN(
//     web3.utils.toWei(nftPrice, "ether").toString()
//   );
//   console.log("calced price", correctPrice);
//   // console.log(correctPrice*mintCount);
//   // console.log(address);
//   if (!window.ethereum || address === null) {
//     return {
//       status:
//         "💡 Connect your Metamask wallet to update the message on the blockchain."
//     };
//   }
//   //set up transaction parameters

//   let e;
//   try {
//     e = await zedxionContract.methods.mint(address, mintCount).estimateGas({
//       // value: correctPrice * mintCount,
//       value: web3.utils.toHex(correctPrice * mintCount),
//       from: address
//     });
//   } catch (u) {
//     console.log("catch fail", u);
//     return { success: false, type: "estimategas" };
//   }
//   let d = await web3.eth.getGasPrice();

//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: address, // must match user's active address.
//     gas: web3.utils.toHex(parseInt(e)),
//     gasPrice: web3.utils.toHex(parseInt(1.2 * d)),
//     maxFeePerGas: null,
//     // value: correctPrice * mintCount,
//     value: web3.utils.toHex(correctPrice * mintCount),
//     // gasLimit: 21000,
//     // gas: web3.utils.toHex(21000),
//     data: zedxionContract.methods.mint(address, mintCount).encodeABI()
//   };
//   // console.log(transactionParameters.value);
//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters]
//     });

//     return {
//       status: (
//         <span>
//           ✅{" "}
//           <a
//             rel="noreferrer"
//             target="_blank"
//             href={`https://rinkeby.etherscan.io/tx/${txHash}`}
//           >
//             View the status of your transaction on Etherscan!
//           </a>
//           <br />
//           ℹ️ Once the transaction is verified by the network, the message will
//           be updated automatically.
//         </span>
//       ),
//       success: true
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       status: "😥 " + error.message
//     };
//   }
// };

// export const Reserve = async (address, mintCount) => {
//   if (!window.ethereum || address === null) {
//     return {
//       status:
//         "💡 Connect your Metamask wallet to update the message on the blockchain."
//     };
//   }
//   //set up transaction parameters
//   console.log(mintCount);
//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: address, // must match user's active address.
//     data: zedxionContract.methods.reserve(mintCount).encodeABI()
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters]
//     });

//     return {
//       status: (
//         <span>
//           ✅{" "}
//           <a
//             rel="noreferrer"
//             target="_blank"
//             href={`https://rinkeby.etherscan.io/tx/${txHash}`}
//           >
//             View the status of your transaction on Etherscan!
//           </a>
//           <br />
//           ℹ️ Once the transaction is verified by the network, the message will
//           be updated automatically.
//         </span>
//       )
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       status: "😥 " + error.message
//     };
//   }
// };

// export const Pause = async (address, flag) => {
//   if (!window.ethereum || address === null) {
//     return {
//       status:
//         "💡 Connect your Metamask wallet to update the message on the blockchain."
//     };
//   }
//   //set up transaction parameters
//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: address, // must match user's active address.
//     data: zedxionContract.methods.pause(flag).encodeABI()
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters]
//     });

//     return {
//       status: (
//         <span>
//           ✅{" "}
//           <a
//             rel="noreferrer"
//             target="_blank"
//             href={`https://rinkeby.etherscan.io/tx/${txHash}`}
//           >
//             View the status of your transaction on Etherscan!
//           </a>
//           <br />
//           ℹ️ Once the transaction is verified by the network, the message will
//           be updated automatically.
//         </span>
//       )
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       status: "😥 " + error.message
//     };
//   }
// };

// export const pauseMinting = async (address, value) => {
//   //input error handling
//   if (!window.ethereum || address === null) {
//     return {
//       status:
//         "💡 Connect your Metamask wallet to update the message on the blockchain."
//     };
//   }
//   //set up transaction parameters
//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: address, // must match user's active address.
//     data: zedxionContract.methods.pause(value).encodeABI()
//   };

//   //sign the transaction
//   try {
//     await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters]
//     });

//     return {
//       status: "Minting has been successfully paused"
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       status: "😥 " + error.message
//     };
//   }
// };

// export const withdrawAll = async (address, mintCount) => {
//   //input error handling
//   if (!window.ethereum || address === null) {
//     return {
//       status:
//         "💡 Connect your Metamask wallet to update the message on the blockchain."
//     };
//   }
//   //set up transaction parameters
//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: address, // must match user's active address.
//     data: zedxionContract.methods.mint(address, mintCount).encodeABI()
//   };

//   //sign the transaction
//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters]
//     });

//     return {
//       status: (
//         <span>
//           ✅{" "}
//           <a
//             rel="noreferrer"
//             target="_blank"
//             href={`https://rinkeby.etherscan.io/tx/${txHash}`}
//           >
//             View the status of your transaction on Etherscan!
//           </a>
//           <br />
//           ℹ️ Once the transaction is verified by the network, the message will
//           be updated automatically.
//         </span>
//       )
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       status: "😥 " + error.message
//     };
//   }
// };

export const getCurrentWalletBalance = async (address) => {
  const web3 = await getWeb3()
  const balance = await web3.eth.getBalance(address)
  console.log("interact: balance of walelt => ", balance)
  return web3.utils.fromWei(balance);
};
