require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/aGGFuA1-ndGif4rzpUFSAhTFm9i3km9A",
      accounts:[`68f2b2981228d8acc3059f939435ecde94cce69a098778b2c1033e883c62c7df`]
    },
  },
};
