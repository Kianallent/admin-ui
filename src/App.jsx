import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-neutral-800 flex flex-col items-center justify-center text-center px-4">
        {/* Login Card */}
        <div className="grid grid-cols-2 w-150 h-125 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side */}
          <div className="flex items-center justify-center bg-gray-200 text-gray-600 text-3xl font-bold">
            600 × 500
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-10">
            <form className="w-full">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>

              {/* Email Input */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-700 text-left">Email</label>
                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700 text-left">Password</label>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg 
                           hover:bg-blue-700 transition-colors shadow"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        {/* End Login Card */}
      </div>
    </>
  )
}

export default App
