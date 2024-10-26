const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FQIhkZAT#sMglFE_Imh9QQkKSVJYg1_hPuCZxchQ8dBHmW3f4Ii4",
MONGODB: process.env.MONGODB || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://unitedcamps.in/Images/file_4270.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39"
};
