require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai:`${process.env.REACT_APP_RPC_URL}`,
      accounts:['process.env.REACT_API_KEY']
    },
  },
};
