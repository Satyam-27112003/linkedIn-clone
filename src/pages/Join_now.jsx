
import { useState } from "react";
import { Link } from "react-router-dom";

function Join_now() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    alert("Join_now form submitted!");

    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-white flex justify-center px-4 py-12">
      <div className="w-full max-w-md">
        
        <Link to="/" className="text-3xl font-bold text-blue-700">
          LinkedIn
        </Link>

       
        <h1 className="text-3xl font-semibold mt-8 mb-2">
          Join LinkedIn
        </h1>

        <p className="text-gray-600 mb-6">
          Make the most of your professional life
        </p>

       
        <form onSubmit={handleSignup}>
          <label className="block font-medium mb-2">
            Full name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-500 rounded-md p-3 mb-4 focus:outline-none focus:border-blue-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="block font-medium mb-2">
            Email address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-500 rounded-md p-3 mb-4 focus:outline-none focus:border-blue-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            minLength={6}
            className="w-full border border-gray-500 rounded-md p-3 mb-2 focus:outline-none focus:border-blue-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className="text-xs text-gray-500 mb-5">
            Password must be at least 6 characters long.
          </p>

          <p className="text-xs text-gray-600 text-center mb-5">
            By clicking Agree & Join, you agree to our User Agreement,
            Privacy Policy, and Cookie Policy.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-full py-3 font-semibold transition"
          >
            Agree & Join
          </button>
        </form>

       
        <p className="text-center mt-6 text-gray-700">
          Already on LinkedIn?{" "}
          <Link
            to="/signin"
            className="text-blue-700 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>

        <p className="text-center mt-6 text-sm">
          <Link to="/" className="text-gray-600 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Join_now;
