import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth(); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-primary">Dashboard</h1>
      <p className="text-lg text-gray-700 mb-8">Welcome to your dashboard. Here you can manage all your activities.</p>
      {user && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900">{user.displayName}</h2>
          <p className="text-gray-700">{user.email}</p>
          <button className="mt-6 btn btn-primary w-full">Manage Account</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
