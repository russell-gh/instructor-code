const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
require("dotenv").config();
console.log(process.env.something);

const url = "https://www.thejump.tech";

(async () => {
  try {
    const response = await axios(url);
    const dom = new JSDOM(response.data);
    const nodeList = [...dom.window.document.querySelectorAll("a")];
    nodeList.forEach((node) => {
      console.log(node.textContent);
    });
  } catch (error) {}
})();
