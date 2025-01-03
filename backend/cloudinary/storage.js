// storage.js
const cloudinary = require('./cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'ecomus', // specify folder name in Cloudinary
        allowedFormats: ['jpeg', 'png', 'jpg'],
    },
});

const upload = multer({ storage });

module.exports = upload;
