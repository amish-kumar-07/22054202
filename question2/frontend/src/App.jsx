const App = () => {
  return (
    <Router>
      <div className="p-4 bg-blue-500 text-white flex justify-around">
        <Link to="/">Top Users</Link>
        <Link to="/trending">Trending Posts</Link>
        <Link to="/feed">Feed</Link>
      </div>
      <Routes>
        <Route path="/" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;