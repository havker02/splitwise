"use client"
import { useState } from "react"

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // TODO: Add login logic
    setFormData ({
      email: "",
      password: ""
    })
  }
  
  return (
    <div className="mt-8">
      <h1 className="text-center font-semibold text-xl">Welcome back to Apna Hisab</h1>
      <div className="form-container mt-8 px-4">
        <h2 className="text-center font-senibold text-lg">Login to your account</h2>
        <form 
          onSubmit={handleSubmit}
          className="mt-8 max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 focus:outline-blue-500"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-blue-500"
              placeholder="name@email.com"
              value={formData.email}
              onChange={(e)=>setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900  focus:outline-blue-500"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-blue-500"
              placeholder="Your password"
              value={formData.password}
              onChange={(e)=>setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
