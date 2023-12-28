const axios = require("axios");

//get
const proxyFunc = async (req, res, next) => {
  //simplify vars
  const { cache, query, headers, method, body } = req;

  /* clean up headers and create a key for the request and set expiry */

  //remove host, accept, content length and server specific headers
  delete headers["host"];
  delete headers["accept"];
  delete headers["content-length"];
  delete headers["connection"];
  delete headers["x-request-id"];
  delete headers["x-request-start"];
  delete headers["connect-time"];
  delete headers["total-route-time"];

  //create a key from headers and query and ip
  const connectingIp = headers["x-forwarded-for"] || req.ip;
  const key = JSON.stringify(headers) + JSON.stringify(query) + connectingIp; //connecting ip

  //get an expiry period in milliseconds else 1 day
  const expiry = query.expiry ? query.expiry * 1000 : 86400000;

  /* logic to decice how to handle response */

  //if key is not in cache get new data
  if (!(key in cache[method])) {
    getNewData();
    return;
  }

  //check key is in cache
  //check cache has not expired
  //skip cache if expiry has changed since cache stored
  if (
    key in cache[method] &&
    cache[method][key].expiryUnixTimeMilli > Date.now() &&
    cache[method][key].expiry === query.expiry * 1000 //to milli
  ) {
    //return cached api results
    console.log("Sending CACHED data!");
    res.send(cache[method][key].data);
  } else {
    //cache has expired or expiry changed so get new data
    getNewData();
  }

  //get new api data
  async function getNewData() {
    try {
      //get new api results
      const methodLower = method.toLowerCase();

      let result = await axios[methodLower](
        query.url,
        //put patch post have a body to spread input request to api request
        { ...body },
        {
          headers: {
            ...headers,
          },
        }
      );

      //check response is not too big
      if (JSON.stringify(result.data).length > 100000) {
        res.send("Error: Reply from API was too big!");
      }

      //store new api result in cache
      cache[method][key] = {
        // id: Object.keys(cache[method]).length + 1,
        expiryUnixTimeMilli: Date.now() + expiry,
        expiry,
        data: result.data,
      };

      //delete old entries
      const cachedKeys = Object.keys(cache[method]);
      if (cachedKeys.length > 999) {
        delete cache[method][cachedKeys[0]];
      }

      //return api results
      console.log("Sending NEW data!");
      res.send(result.data);
    } catch (error) {
      //return api results
      res.send(error);
    }
  }
};

module.exports = proxyFunc;
