const axios = require('axios');
const https = require('https');

const fetch = async () => {
  const username = process.env.PROXY_AUTH_USERNAME;
  const auth = {
    username,
    password: process.env.PROXY_AUTH_PASSWORD
  };
  const testUrl = process.env.PROXY_TEST_URL || 'https://www.google.com';
  const { data } = await axios.get(testUrl, {
    proxy: {
      protocol: process.env.PROXY_PROTOCOL || 'https',
      host: process.env.PROXY_HOST,
      port: process.env.PROXY_PORT || '30129',
      ...(username ? auth : {}),
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  });
  console.log('========data', data);
};
fetch();
