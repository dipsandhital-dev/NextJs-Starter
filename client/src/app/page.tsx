import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to the Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your tasks, track analytics, and stay organized with a powerful dashboard
        </p>

        <Link
          href="/dashboard"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Home
