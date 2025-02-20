import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { ThunkInsertUser } from "../store/User/UserSlice";
import { Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.users);
  
  const [usePasswordError, setUsePasswordError] = useState("");

  const [user, setUser] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmation_password: "",
    image: null,
    Role: "",
  });

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (user.password !== user.confirmation_password) {
      setUsePasswordError("Passwords do not match");
      return;
    }

    setUsePasswordError(""); // Clear error
    dispatch(ThunkInsertUser(user));
  };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Register</h2>
      </div>

      <div className="mt-8  sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-200 p-6 shadow-md rounded-lg">
          
          {/* Full Name */}
          <input name="full_name" type="text" placeholder="Full Name" onChange={handleChange} required className="w-full p-2 border rounded" />

          {/* Email */}
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded" />

          {/* Password */}
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="w-full p-2 border rounded" />

          {/* Confirm Password */}
          <input name="confirmation_password" type="password" placeholder="Confirm Password" onChange={handleChange} required className="w-full p-2 border rounded" />
          {usePasswordError && <p className="text-red-500">{usePasswordError}</p>}

          {/* Image Upload */}
          <input name="image" type="text" onChange={handleChange} placeholder="Image" required className="w-full p-2 border rounded" />

          {/* Role Selection */}
          <label className="block font-medium text-gray-700">Role:</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="Role" value="Client" onChange={handleChange} required className="mr-1" />
              Client
            </label>
            <label>
              <input type="radio" name="Role" value="Employee" onChange={handleChange} required className="mr-1" />
              Employee
            </label>
          </div>

          {/* Submit Button */}
          <Link to='/Login' className="w-full bg-indigo-600 text-white mt-32 ml-72 p-2 rounded">
            {loading ? "Registering" : "Sign Up"}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
