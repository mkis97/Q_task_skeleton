import axios from "axios";

const authApi = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

function getUsers() {
  return authApi.get(`users`);
}

function getUser(userId) {
  return authApi.get(`users/${userId}`);
}

function getPosts(paramsObject = null) {
  return authApi.get(`posts`, { params: paramsObject });
}

function getPost(postId) {
  return authApi.get(`posts/${postId}`);
}

function getPostsComments(postId) {
  return authApi.get(`posts/${postId}/comments`);
}

const auth = {
  getUsers,
  getUser,
  getPosts,
  getPost,
  getPostsComments,
};

export { auth };
