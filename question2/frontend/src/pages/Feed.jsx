const Feed = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const allPosts = usersData.flatMap(user => user.posts).sort((a, b) => b.id.localeCompare(a.id));
      setPosts(allPosts);
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
        {posts.map(post => (
          <div key={post.id} className="p-4 mb-2 bg-gray-100 rounded-lg shadow">
            <img src={post.image} alt="Post" className="w-full h-40 object-cover mb-2" />
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  };
  