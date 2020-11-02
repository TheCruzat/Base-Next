
const compose = require("next-compose-plugins");
const images = require("next-images");

module.exports = compose([images], {
    target: 'server',
});
