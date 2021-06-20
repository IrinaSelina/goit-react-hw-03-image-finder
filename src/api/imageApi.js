import React from "react";
import axios from "axios";

const URL = "https://pixabay.com/api/";
const KEY = "21254029-2b209fd62c1580633fde42429";

// console.log(`${URL}?${searchParams}`);
const fetchArticlesWithQuery = (searchParam, page) => {
  const searchParams = new URLSearchParams({
    image_type: "photo",
    orientation: "horizontal",
    q: searchParam,
    page: page,
    per_page: 12,
    key: KEY,
  });

  return axios.get(`${URL}?${searchParams}`);
};
const imageApi = {
  fetchArticlesWithQuery,
};
export default { fetchArticlesWithQuery };
