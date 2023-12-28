//append cache to request
const cacheFunc = (cache) => {
  //return a function to allow access to cache object
  return (req, res, next) => {
    req.cache = cache;
    next();
  };
};

module.exports = cacheFunc;
