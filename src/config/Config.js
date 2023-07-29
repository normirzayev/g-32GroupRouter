import { useContext, useEffect } from "react";
import { ContextData } from "./Context";
import axios from "axios";

export default function Config() {
  const { setJsonData, setLoading, setPhpData } = useContext(ContextData);
  const GetJson = () => {
    setLoading(true);
    axios("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    })
      .then((response) => {
        setJsonData(response.data);
        // console.log(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  const GetPhpApi = () => {
    setLoading(true);
    axios("http://test-api.nammqial.uz/public/api/news", {
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data.data);
        setPhpData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    GetJson();
    GetPhpApi();
  }, []);
}
