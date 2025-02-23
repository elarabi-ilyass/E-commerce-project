import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { ThunkGETUser } from "../store/User/UserSlice";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
  isAuthenticated: boolean;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users } = useAppSelector((state) => state.users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch users when the component loads
  useEffect(() => {
    dispatch(ThunkGETUser());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "false"); // ✅ Store auth state
      localStorage.setItem("user", JSON.stringify(user)); // ✅ Store user info
      navigate("/");
    } else {
      alert("Invalid email or password");
      setIsAuthenticated(false);
      localStorage.setItem("isAuthenticated", "false");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Sign in to your account</h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400"
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
            Sign in
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link to="/register" className="font-semibold text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
