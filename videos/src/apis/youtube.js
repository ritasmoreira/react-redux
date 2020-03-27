import axios from "axios";

const KEY = "AIzaSyAExvxX8hy5vrrgKFsG6KMC1pM5PnD4z8M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
