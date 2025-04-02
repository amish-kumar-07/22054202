const { fetchUsers, fetchUserPosts } = require('./api');

let usersCache = [];
let lastFetchTime = 0;
const CACHE_TTL = 5 * 60 * 1000;

const getTopUsers = async (req, res) => {
  const currentTime = Date.now();
  
  if (usersCache.length === 0 || (currentTime - lastFetchTime) > CACHE_TTL) {
    const { users } = await fetchUsers();
    
    const userPromises = Object.keys(users).map(async (userId) => {
      const { posts } = await fetchUserPosts(userId);
      return {
        id: userId,
        name: users[userId],
        postCount: posts.length
      };
    });
    
    const userResults = await Promise.all(userPromises);
    
    usersCache = userResults
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 5);
    
    lastFetchTime = currentTime;
  }
  
  res.json(usersCache);
};

module.exports = {
  getTopUsers
};