console.log("GQL Lives!");

const axios = require("axios");

axios
  .post(
    "https://api.spacex.land/graphql/",
    //method: "post",
    {
      query: `
            { 
                launchesPast(limit: 1) {
                                            id
                                        }
            }
        `,
    }
  )
  .then((result) => {
    console.log(result.data.data.launchesPast);
  })
  .catch((error) => {
    console.log(error.response.status, error.response.statusText);
  });
