import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-2">Name</label>
                    <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-2">Email</label>
                    <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-bold mb-2">Message</label>
                    <textarea id="message" rows="4" className="w-full border border-gray-300 p-2 rounded focus:outline-none"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
