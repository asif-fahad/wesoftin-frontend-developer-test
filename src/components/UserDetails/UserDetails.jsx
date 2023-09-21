import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams()

    // console.log(id)
    const [detailsUser, setDetailsUser] = useState([]);

    useEffect(() => {
        fetch(`/users.json`)
            .then(res => res.json())
            .then(data => setDetailsUser(data.find(d => d.id == id)))
    }, [])

    // console.log(details);

    const { name, email, image, details, skills, experience, country } = detailsUser;

    return (
        <div className="w-72 md:w-4/12  mx-auto bg-gradient-to-r from-gray-300 to-slate-400 shadow-lg rounded-lg overflow-hidden mb-4">
            <div className="flex justify-center pt-4">
                <img className="w-32 h-32 object-cover rounded-full" src={image} alt={name} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm mb-4">{email}</p>
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Skills</h3>
                    <ul className="list-disc pl-4">
                        {skills?.map((s, index) => <li key={index}>{s}</li>)}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Details</h3>
                    <p>{details}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Experience</h3>
                    <p>{experience}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Country</h3>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails