import { useContext, useEffect } from "react";
import { ContextData } from "./Context";
import axios from "axios";

export default function Config() {
  const { setJsonData, setLoading, setPhpData } = useContext(ContextData);
  const GetJson = async () => {
    setLoading(true);
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setJsonData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const GetPhpApi = async () => {
    setLoading(true);
    try {
      let res = await axios.get("http://test-api.nammqial.uz/public/api/news");
      setPhpData(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    GetJson();
    GetPhpApi();
  }, []);
}
