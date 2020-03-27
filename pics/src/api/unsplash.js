import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID aoR6bYDtf8erIPLHbAPiubrRDvNjNWJ7sgIsdf5F4kQ"
  }
});
