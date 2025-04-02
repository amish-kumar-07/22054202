import usersData from "./data/users_data.json";
import "./index.css";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const sortedUsers = [...usersData].sort((a, b) => b.postCount - a.postCount).slice(0, 5);
    setTopUsers(sortedUsers);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      {topUsers.map(user => (
        <div key={user.id} className="p-4 mb-2 bg-gray-100 rounded-lg shadow">
          <img src={user.profileImage} alt={user.name} className="w-10 h-10 rounded-full inline-block mr-2" />
          {user.name} - {user.postCount} posts
        </div>
      ))}
    </div>
  );
};