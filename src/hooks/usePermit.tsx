import { useQuery } from "react-query";
import Requests from "../libs/request";

function usePermit() {
  return useQuery("permits", () =>
    Requests.fetchWithOutToken({ url: "/permit", method: "GET" })
  );
}

export default usePermit;
