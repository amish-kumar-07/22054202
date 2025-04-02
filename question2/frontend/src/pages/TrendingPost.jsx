const TrendingPosts = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);
  
    useEffect(() => {
      const allPosts = usersData.flatMap(user => user.posts);
      const maxComments = Math.max(...allPosts.map(post => post.commentCount));
      const trending = allPosts.filter(post => post.commentCount === maxComments);
      setTrendingPosts(trending);
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
        {trendingPosts.map(post => (
          <div key={post.id} className="p-4 mb-2 bg-gray-100 rounded-lg shadow">
            <img src={post.image} alt="Post" className="w-full h-40 object-cover mb-2" />
            <p>{post.content}</p>
            <p className="text-sm text-gray-500">Comments: {post.commentCount}</p>
          </div>
        ))}
      </div>
    );
  };