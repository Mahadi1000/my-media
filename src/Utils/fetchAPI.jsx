import axios from "axios";

const Base_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  url: Base_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: "100",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,

    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);
  return data;
};
