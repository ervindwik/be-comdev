const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'dv9yhj2nq', 
    api_key: '572912443836513', 
    api_secret: 'eNsdfqWqAwXOvi9jJCtXy_dFPnE',
    secure : true
});

module.exports = cloudinary;