const BASE_URL =  "https://62cb44623e924a0128656cd9.mockapi.io/api/v1"

type requestArgsTypes = {
    url:string;
    method:string;
    token?:string,
    data?:object
}

class Requests {
    BASE_URL :string
    constructor(BASE_URL:string) {
        this.BASE_URL = BASE_URL
    }

    fetchWithAuthToken = async ({url, method, token, data}:requestArgsTypes) => {
        try {
          const response = await fetch(`${this.BASE_URL}${url}`, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
      
            body: JSON.stringify(data),
          });
          return response.json();
        } catch (error:any) {
          return { status: "error", message: error.message };
        }
      };


      fetchWithOutToken = async ({url, method,  data}:requestArgsTypes) => {
        try {
          const response = await fetch(`${this.BASE_URL}${url}`, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
      
            body: JSON.stringify(data),
          });
          return response.json();
        } catch (error:any) {
          return { status: "error", message: error.message };
        }
      };


      fetchWihOutBaseUrl = async ({url, method, token, data}:requestArgsTypes) => {
        try {
          const response = await fetch(`${url}`, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
      
            body: JSON.stringify(data),
          });
          return response.json();
        } catch (error:any) {
          return { status: "error", message: error.message };
        }
      };
   
 
      
      
}






export default new Requests(BASE_URL)
