const axios = require('axios');

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjA4MjUyLCJpYXQiOjE3NDM2MDc5NTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjcyMTk2ZTkyLWJjMmMtNGMyNi1hZmYwLTMyMzQ3MjE2NmE3ZCIsInN1YiI6IjIyMDU0MTM3QGtpaXQuYWMuaW4ifSwiZW1haWwiOiIyMjA1NDEzN0BraWl0LmFjLmluIiwibmFtZSI6InN1cnlhbnNoIHNpbmdoIiwicm9sbE5vIjoiMjIwNTQxMzciLCJhY2Nlc3NDb2RlIjoibndwd3JaIiwiY2xpZW50SUQiOiI3MjE5NmU5Mi1iYzJjLTRjMjYtYWZmMC0zMjM0NzIxNjZhN2QiLCJjbGllbnRTZWNyZXQiOiJRV3h3UU1lU2VnTWNEdnBXIn0.EWRRvEK3qR2-9DNmNPTxe6NAGnnIIVvZBlGhn8mDlm0';

const BASE_URL = 'http://20.244.56.144/evaluation-service';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer ' + TOKEN
  }
});

const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

const fetchUserPosts = async (userId) => {
  const response = await api.get(`/users/${userId}/posts`);
  return response.data;
};

const fetchPostComments = async (postId) => {
  const response = await api.get(`/posts/${postId}/comments`);
  return response.data;
};

module.exports = {
  fetchUsers,
  fetchUserPosts,
  fetchPostComments
};