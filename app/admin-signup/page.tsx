"use client";

import { useState } from "react";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.dismiss();

    try {
      const res = await fetch("/api/admin-signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Admin created successfully 🎉");
        setEmail("");
        setName("");
        setPassword("");
      } else {
        toast.error(data.error || "Signup failed");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-greyshade to-gray-100">
      <form
        onSubmit={handleSignup}
        className="w-96 mx-auto mt-16 bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
          <UserPlus className="w-5 h-5" /> Admin Signup
        </h2>

        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <User className="w-5 h-5 text-gray-500 mr-2" />
          <input
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full outline-none bg-transparent text-gray-800"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <Mail className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none bg-transparent text-gray-800"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <Lock className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none bg-transparent text-gray-800"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}>
          {loading ? "Creating..." : "Create Admin"}
        </button>
      </form>
    </div>
  );
}
