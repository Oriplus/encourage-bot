const fetch = require("node-fetch");
const API_URL = "https://zenquotes.io/api/random";

const getQuote = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return `${data[0].q} ${data[0].a}`;
}

module.exports = {
    getQuote
}