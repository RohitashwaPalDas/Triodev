"use client";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AuthPage() {
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [emailError, setEmailError] = useState(false);
    const [strength, setStrength] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const { data: session } = useSession();
    const [form, setForm] = useState({ firstname: "", lastname: "", username: "", email: "", password: "" });
    const router = useRouter();

    const validatePassword = (password) => {
        let errors = [];
        let score = 0;

        if (password.length >= 8) score += 1;
        else errors.push("Must be at least 8 characters.");

        if (/[A-Z]/.test(password)) score += 1;
        else errors.push("Must contain at least one uppercase letter.");

        if (/[a-z]/.test(password)) score += 1;
        else errors.push("Must contain at least one lowercase letter.");

        if (/\d/.test(password)) score += 1;
        else errors.push("Must contain at least one number.");

        if (/[\W_]/.test(password)) score += 1;
        else errors.push("Must contain at least one special character.");

        setPasswordErrors(errors);
        setStrength(score);
        return errors.length === 0;
    };

    const getStrengthLabel = () => {
        if (strength <= 1) return { label: "Weak", color: "bg-red-500" };
        if (strength <= 3) return { label: "Medium", color: "bg-yellow-400" };
        if (strength >= 4) return { label: "Strong", color: "bg-green-500" };
    };


    const isValidEmail = async (email) => {
        try {
            let apiKey = process.env.NEXT_PUBLIC_EMAIL_VALIDATION_API_KEY;
            console.log("API KEY+ ", apiKey);
            let url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;
            let response = await fetch(url);
            let result = await response.json();
            console.log("EMAIL VALIDATION:", result);

            if (!result.smtp_check) {
                setEmailError(true);
                return false;
            }
            return true;
        } catch (error) {
            console.error("Error validating email:", error);
            return false;
        }
    };

    useEffect(() => {
        if (session) {
            router.push("/dashboard");
        }
    }, [session, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSignup) {
            if (!validatePassword(form.password)) {
                return;
            }
            const isEmailValid = await isValidEmail(form.email);
            console.log("Email validation result:", isEmailValid);
            if (!isEmailValid) {
                return;
            }
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMessage(data.error || "Something went wrong");
                toast.error(data.error || "Something went wrong");
                return;
            }

            if (res.ok) {
                const loginRes = await signIn("credentials", {
                    redirect: false,
                    email: form.email,
                    password: form.password,
                });

                if (!loginRes.error) {
                    router.push("/dashboard");
                }
            }
        } else {
            const res = await signIn("credentials", {
                redirect: false,
                email: form.email,
                password: form.password,
            });

            if (!res.error) router.push("/dashboard");
        }
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white">
            {/* Left Section - Branding */}
            <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
                <h1 className="text-6xl font-extrabold mb-6 z-10">TrioDev</h1>
                <p className="text-lg text-blue-100 max-w-md text-center z-10">
                    Build modern web solutions with us.
                    Sign up today and explore the future of development.
                </p>
                <div className="flex-1 flex justify-center">
                    <DotLottieReact
                        src="https://lottie.host/621d617e-2847-4371-b4ad-5a77b8a1def3/Zl1R78TGeR.lottie"
                        loop
                        autoplay
                        className="drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="flex flex-1 items-center justify-center p-6">
                <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-blue-100 relative h-[600px] overflow-y-auto scrollbar-hide-x">
                    <h2 className="text-3xl font-bold text-blue-700 text-center">
                        {isSignup ? "Create Account" : "Welcome Back"}
                    </h2>
                    <p className="text-center text-gray-600 mt-2 mb-8">
                        {isSignup
                            ? "Sign up to get started with TrioDev"
                            : "Login to continue your journey"}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {isSignup && (
                            <>
                                <div className="flex gap-3">
                                    <div className="relative w-1/2">
                                        <input
                                            type="text"
                                            id="firstName"
                                            value={form.firstname}
                                            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                                            className="peer w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none placeholder-transparent"
                                            placeholder="First Name"
                                            required
                                        />
                                        <label
                                            htmlFor="firstName"
                                            className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-2 peer-valid:text-sm peer-valid:text-blue-600 bg-white px-1 rounded"
                                        >
                                            First Name
                                        </label>
                                    </div>

                                    <div className="relative w-1/2">
                                        <input
                                            type="text"
                                            id="lastName"
                                            value={form.lastname}
                                            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                                            className="peer w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none placeholder-transparent"
                                            placeholder="Last Name"
                                            required
                                        />
                                        <label
                                            htmlFor="lastName"
                                            className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-2 peer-valid:text-sm peer-valid:text-blue-600 bg-white px-1 rounded"
                                        >
                                            Last Name
                                        </label>
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        id="username"
                                        value={form.username}
                                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                                        className="peer w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none placeholder-transparent"
                                        placeholder="Username"
                                        required
                                    />
                                    <label
                                        htmlFor="username"
                                        className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-2 peer-valid:text-sm peer-valid:text-blue-600 bg-white px-1 rounded"
                                    >
                                        Username
                                    </label>
                                </div>
                            </>
                        )}

                        <div className="relative">
                            <input
                                type="text"
                                id="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="peer w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none placeholder-transparent"
                                placeholder="Email"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-2 peer-valid:text-sm peer-valid:text-blue-600 bg-white px-1 rounded"
                            >
                                Email
                            </label>
                        </div>
                        {emailError && (
                            <div className="text-red-400 text-sm relative left-3 top-[-10px]">
                                Invalid Email. Please enter a valid email address
                            </div>
                        )}

                        {/* Password with Show/Hide Toggle */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={form.password}
                                onChange={(e) => {
                                    setForm({ ...form, password: e.target.value });
                                    if (isSignup) {
                                        validatePassword(e.target.value);
                                    }
                                }}
                                className="peer w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none placeholder-transparent pr-12"
                                placeholder="Password"
                                required
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-2 peer-valid:text-sm peer-valid:text-blue-600 bg-white px-1 rounded"
                            >
                                Password
                            </label>

                            <button
                                type="button"
                                onClick={() => {
                                    setShowPassword(!showPassword);
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                            >
                                {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
                            </button>
                        </div>

                        <div className="text-left text-red-400 text-sm">
                            {passwordErrors.map((error, index) => (
                                <p key={index} className="mt-1">
                                    • {error}
                                </p>
                            ))}
                        </div>

                        {/* Password Strength Meter */}
                        {isSignup && form.password.length > 0 && (
                            <div className="mt-3">
                                <div className="w-full bg-gray-700 rounded-full h-1">
                                    <div
                                        className={`h-1 rounded-full ${getStrengthLabel().color}`}
                                        style={{ width: `${(strength / 5) * 100}%` }}
                                    ></div>
                                </div>
                                <p className="text-black text-xs mt-2">
                                    {getStrengthLabel().label}
                                </p>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold shadow-lg transition-transform transform hover:-translate-y-0.5"
                        >
                            {isSignup ? "Sign Up" : "Login"}
                        </button>
                    </form>

                    <div className="flex items-center gap-2 my-6">
                        <hr className="flex-1 border-gray-300" />
                        <span className="text-gray-400 text-sm">or</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* Social Login */}
                    <div className="flex gap-4">
                        <button onClick={() => signIn("google")} className="flex-1 flex items-center justify-center gap-2 border rounded-xl py-3 bg-white hover:bg-gray-50 shadow-sm transition">
                            <FaGoogle className="text-red-500" /> Google
                        </button>

                    </div>

                    {/* Switch Auth */}
                    <p className="mt-6 text-gray-600 text-center">
                        {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
                        <button
                            type="button"
                            onClick={() => setIsSignup(!isSignup)}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            {isSignup ? "Login" : "Sign Up"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
