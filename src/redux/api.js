import axios from "axios";

export const loadUsersApi = async () =>
  await axios.get(`https://jsonplaceholder.typicode.com/posts`);

export const createUserApi = async (user) =>
  await axios.post(`https://jsonplaceholder.typicode.com/posts`, user);


export const updateUserApi = async (id, userInfo) =>
  await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, userInfo);

export const searchUserApi = async (Query) =>
  await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${Query}`);



export const sortUserApi = async (value) =>
  await axios.get(`https://jsonplaceholder.typicode.com/posts?_sort=${value}&direction=asc`);