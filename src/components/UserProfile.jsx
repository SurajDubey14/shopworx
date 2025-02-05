import { FaUser } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-64">
      <div className="w-12 h-12 bg-blue-400 flex items-center justify-center rounded-full">
        <FaUser className="w-8 h-8 text-white" />
      </div>
      <div className="ml-4">
        <h3 className="text-gray-900 font-semibold">Admin Shopworx</h3>
        <p className="text-gray-600 text-sm">Role : Admin</p>
      </div>
      <div className="ml-auto flex items-center">
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
    </div>
  );n
};

export default UserProfile;
