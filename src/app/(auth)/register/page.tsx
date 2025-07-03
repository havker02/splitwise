"use client";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Failed to register, please try again later");
      }
      const data = await res.json();
      console.log(data);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-8 md:mt-20">
      <h1 className="text-center font-semibold text-xl md:text-5xl">
        Welcome to Apna Hisab
      </h1>
      <div className="form-container mt-8 px-4 border border-zinc-300 m-4 rounded-lg shadow-md shadow-zinc-300 py-8">
        <h2 className="text-center font-semibold text-lg md:text-4xl">
          Create your account
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 mx-auto md:mx-16">
          <div className="flex gap-2">
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 focus:outline-blue-500 md:text-2xl md:font-semibold md:mb-4 md:mt-8"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-blue-500 md:h-18 md:text-2xl md:font-semibold"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 focus:outline-blue-500 md:text-2xl md:font-semibold md:mb-4 md:mt-8"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-blue-500 md:h-18 md:text-2xl md:font-semibold"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 focus:outline-blue-500 md:text-2xl md:font-semibold md:mb-4 md:mt-8"
            >
              Your email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-blue-500 md:h-18 md:text-2xl md:font-semibold"
              placeholder="name@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900  focus:outline-blue-500 md:text-2xl md:font-semibold md:mb-4 md:mt-8"
            >
              Your password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-blue-500 md:h-18 md:text-2xl md:font-semibold"
              placeholder="Your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center md:text-2xl md:font-semibold md:mt-8"
          >
            Create account
          </button>
        </form>
        <p className="mt-4 text-center text-sm font-medium text-grey-900 md:text-2xl md:font-semibold md:mb-8">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
