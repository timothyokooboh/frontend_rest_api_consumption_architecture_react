import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axios from "../http-client";
import APIEndpoint from "../types";

const useResource = (endpoint: APIEndpoint) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      axios(endpoint)
        .then((res) => {
          setError(null);
          setResponse(res);
        })
        .catch((err) => setError(err))
        .finally(() => {
          setLoading(false);
        });
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [endpoint]);

  return {
    loading,
    response,
    error
  };
};

export default useResource;
