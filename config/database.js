const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: 'mongodb://brad:brad@ds113435.mlab.com:13435/meanauthapp', // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: 'mean-angular-2' // Database name
}
