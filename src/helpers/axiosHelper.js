import { useEffect, useState } from "react";
import axios from "axios";

const UseAppPost = (url, submitData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);
  axios.defaults.baseURL = "https://hidden-everglades-98624.herokuapp.com/api";
  useEffect(() => {
    if (submitData) {
      setIsLoading(true);
      const postData = async () => {
        try {
          const resp = await axios.post(url, submitData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await resp?.data;
          setApiData(data);
          setIsLoading(false);
        } catch (error) {
          setServerError(error.message);
          setIsLoading(false);
        }
      };
      postData();
    }
  }, [url, submitData]);

  return { isLoading, apiData, serverError };
};

export default UseAppPost;
