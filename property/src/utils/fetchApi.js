import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": `b1f1121262msh4526cda90491652p1a9640jsnb3cbcca5d85b`,
      "X-RapidAPI-Host": `bayut.p.rapidapi.com`,
    },
  });

  return data;
};
