const env = require("dotenv");
env.config();

module.exports = {
    port: process.env.PORT || 3000
};