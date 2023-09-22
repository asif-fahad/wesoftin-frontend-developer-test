import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-6 text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-bold text-xl">Wesoftin</p>
                        <p className="text-gray-400">Wesoftin provides its clients with outplacement or outsourcing services. This includes placement of remote contractors.</p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-4">Contact Us</h3>
                        <p>Mohammadpur,</p>
                        <p>Dhaka.</p>
                        <p>Email: wesoftinteam@gmail.com</p>
                        <p>Phone: (+88) 015-000000000</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer