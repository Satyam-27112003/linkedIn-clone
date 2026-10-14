
import { useState } from "react";
import axios from "axios";

// import GoogleButton from "../components/buttons/GoogleButton";
// import MicrosoftButton from "../components/buttons/MicrosoftButton";
// import AppleButton from "../components/buttons/AppleButton";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async (e) => {
  e.preventDefault();
  setMessage("Logging in...");

  try {
    const response = await axios.post(
      "http://localhost:8000/api/auth/login",
      { email, password }
    );

    setMessage(response.data.message || "Login successful!");
  } catch (error) {
    console.error("Login error:", error);

    setMessage(
      error.response
        ? `Error ${error.response.status}: ${
            error.response.data?.message || "Login failed"
          }`
        : "Backend server is not reachable. Check whether it is running."
    );
  }
};

  return (
    <section className="bg-white flex justify-center pt-20 px-4 min-h-screen">
      <div className="w-full max-w-[420px] border border-gray-200 rounded-lg px-7 py-7">
        <h1 className="text-[28px] font-semibold text-gray-900 mb-3">
          Sign in
        </h1>

        <p className="text-[12px] text-gray-700 mb-5">
          New to LinkedIn?{" "}
          <a
            href="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Join Now
          </a>
        </p>

        {/* <GoogleButton />
        <MicrosoftButton />
        <AppleButton /> */}

        <p className="text-[13px] leading-5 text-gray-600 mt-5">
          By continuing you agree to LinkedIn&apos;s{" "}
          <a href="#" className="text-blue-600 hover:underline">
            User Agreement, Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Cookie Policy
          </a>
        </p>

        <div className="flex items-center gap-2 my-4">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-[15px] text-gray-500">or</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        <form onSubmit={loginUser}>
          <label
            htmlFor="email"
            className="block text-[15px] text-gray-800"
          >
            Email or phone
          </label>

          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
            className="w-full h-[42px] border-2 border-gray-600 rounded-[3px] mt-1 mb-3 px-2 outline-none focus:border-blue-600"
          />

          <label
            htmlFor="password"
            className="block text-[15px] text-gray-800"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="w-full h-[42px] border-2 border-gray-600 rounded-[3px] mt-1 mb-3 px-2 outline-none focus:border-blue-600"
          />

          <a
            href="/forgot-password"
            className="inline-block text-[14px] text-blue-700 font-medium mt-1 hover:underline"
          >
            Forgot password?
          </a>

          <label className="flex items-center gap-2 mt-5">
            <input type="checkbox" className="w-[22px] h-[22px]" />
            <span className="text-[15px] text-gray-800">
              Keep me signed in
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-[43px] bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-full font-semibold text-[14px] mt-4"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {message && (
          <p role="status" className="text-center text-blue-600 mt-3">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Signin;
