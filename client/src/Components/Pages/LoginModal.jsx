import React, { useState } from "react";
import { loginUser,signupUser } from "../../Authapi/auth";

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await loginUser({
        email: form.email,
        password: form.password,
      });

      onLoginSuccess(); // update navbar state
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signupUser(form);
      setIsSignup(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      <div
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={isSignup ? handleSignup : handleLogin} className="space-y-4">
          {isSignup && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded-md"
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded-md"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded-md"
          />

          <button className="w-full py-3 bg-[#f5b754] text-black font-bold rounded-md">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-200 mt-4">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button onClick={() => setIsSignup(false)} className="text-[#f5b754]">
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button onClick={() => setIsSignup(true)} className="text-[#f5b754]">
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
