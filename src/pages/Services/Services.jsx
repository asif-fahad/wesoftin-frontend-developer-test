import React from 'react';
import { FaLaptop, FaMobileAlt, FaPalette, FaServer } from 'react-icons/fa';

const Services = () => {
    const servicesData = [
        {
            title: "FrontEnd Development",
            details: "Creative and software engineering/programming skills to design, build, and improve websites.",
            icon: <FaLaptop size={40} className="mx-auto mb-4 text-blue-500" />
        },
        {
            title: "App Development",
            details: "Programming app development skills to create, test, and develop applications on mobile devices.",
            icon: <FaMobileAlt size={40} className="mx-auto mb-4 text-green-500" />
        },
        {
            title: "Graphics Design",
            details: "Graphic designers will typically work with other engineers and web developers to decide on a direction.",
            icon: <FaPalette size={40} className="mx-auto mb-4 text-red-500" />
        },
        {
            title: "BackEnd Development",
            details: "Back-end development refers to server-side development. It focuses on databases, scripting, and websites.",
            icon: <FaServer size={40} className="mx-auto mb-4 text-purple-500" />
        },

    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {servicesData.map((service, index) => (
                    <div key={index} className="p-6 bg-white shadow-md hover:bg-gray-100 transform hover:scale-105 transition-transform ease-in-out duration-300 text-center">
                        {service.icon}
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p>{service.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
