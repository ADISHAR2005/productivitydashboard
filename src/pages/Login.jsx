import { useState } from "react";
import InputField from "../components/InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

 const navigater=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email ,
      password});
      navigater("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sign in to your account
        </p>

        <form className="space-y-4" onSubmit={handleSubmit} >
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <InputField
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-12 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div> */}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Dont have an account?{" "}
          <span className="text-blue-600 cursor-pointer">
            <Link
             to="/register"
            >
            Sign Up
            </Link>
            
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;