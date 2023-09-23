import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Error 404</h1>
                <Link to="/">
                    <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300">Return to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage