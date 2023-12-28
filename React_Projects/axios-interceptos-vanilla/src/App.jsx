import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  const get = () => {
    axios.interceptors.request.use((req) => {
      req.headers.Authorization = "123";
      console.log(req);
      return req;
    });

    axios.get("https://google.com");

    // axios.interceptors.response.use(res => {
    //   res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
    //   return res;
    // },
    // res => {
    //   res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
    //   throw res;
    // });
  };

  useEffect(() => {
    get();
  }, []);

  return <></>;
};

export default App;
