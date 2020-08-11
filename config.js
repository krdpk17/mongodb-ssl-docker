module.exports = {
  mongodb: {
    ssl: true,
    sslValidate: false,
    sslCA: [
      require('fs').readFileSync(process.env.ME_CONFIG_MONGODB_CA_FILE).toString()
    ],
  }
};


