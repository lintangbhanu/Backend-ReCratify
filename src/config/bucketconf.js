// config.js
const { Storage } = require('@google-cloud/storage');
const path = require('path');

const storage = new Storage({
    keyFilename: path.join(__dirname,'credentials.json'), 
    projectId: 'recratify',
});

const bucketName = 'craft-storage-recratify'; 
const bucket = storage.bucket(bucketName);

module.exports = { bucket };
