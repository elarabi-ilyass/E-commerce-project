import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../Store/hooks";
import { ThunkGETUser } from "../Store/User/thunk/ThunkGetUser";

const Users = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  console.log(users);

  // Fetch users when component mounts
  useEffect(() => {
    dispatch(ThunkGETUser());
  }, [dispatch]);

  if (loading === "loading") {
    return <div className="text-center text-gray-600">Loading...</div>;
  }
  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600 text-sm">
            A list of all the users in your account including their name, title,
            email, and role.
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add User
        </button>
      </div>
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left text-gray-600">Name</th>
            <th className="py-3 px-4 text-left text-gray-600">Status</th>
            <th className="py-3 px-4 text-left text-gray-600">Role</th>
            <th className="py-3 px-4 text-left text-gray-600">Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-4 flex items-center space-x-3">
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-gray-900 font-medium">{user.full_name}</p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </td>
              <td className="py-3 px-4">
              <span className={`${user.status===false?'px-2 py-1 text-xs text-white  bg-red-500 rounded-full':'px-2 py-1 text-xs text-white  bg-green-500 rounded-full'}`}>
                {user.status===false ? 'No Active':' Active '}
              </span>
              </td>
            
              <td className="py-3 px-4">{user.Role}</td>
              <td className="py-3 px-4">
                <a href="#" className="text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
