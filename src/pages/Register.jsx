import { useState } from "react"
import InputField from "../components/InputField"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigater=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !name ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            alert("Fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log({
            name,
            email,
            password,
        });
        navigater("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-2">Welcome</h1>
                <p className="text-center text-gray-500 mb-6">Sign up your Account</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <label className="block text-sm font-medium mb-1">
                        Username
                    </label>
                    <InputField
                        name="name"
                        placeholder="Enter name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label className="block text-sm font-medium mb-1" >
                        Email
                    </label>
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="relative">
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <InputField
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
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

                        {password.length > 0 && (
                            <p
                                className={`text-sm mt-1 ${password.length < 8
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }`}
                            >
                                Strength:
                                {password.length < 8 ? "weak" : "Strong"}
                            </p>

                        )}
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium mb-1">
                            Confirm Password
                        </label>
                        <InputField
                            name="password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-12 -translate-y-1/2 text-gray-500"
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button

                        className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
                        Sign up
                    </button>

                </form>
                <p className="text-center text-gray-500 mt-6">
                    Already have an account?{" "}
                    <span className="text-blue-600 cursor-pointer">
                        <Link
                        to="/"
                        >
                            Sign In
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Register