import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MyContext } from '../../../providers/ContextProviders';
import LoadingSpinner from '../../Reuseable/LoadingSpinner';

const UserDetails = () => {
    const { id } = useParams()

    const { users } = useContext(MyContext);

    // console.log(users);

    const user = users.find(user => user.id == id)

    if (!user) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const { name, email, image, details, skills, experience, country } = user;

    return (
        <div>
            <div className="w-72 md:w-6/12 lg:w-5/12  mx-auto bg-gradient-to-r from-gray-300 to-slate-400 shadow-lg shadow-zinc-600 rounded-lg overflow-hidden mb-4">
                <div className="flex flex-col items-center md:flex-row gap-4 md:gap-16 px-6 py-4">
                    <div className='flex flex-col items-center bg-gradient-to-r from-gray-300 to-slate-400 border-double border-4 border-slate-500 shadow-xl shadow-zinc-600 rounded p-2'>
                        <div className="flex justify-center pt-4">
                            <img className="w-32 h-32 object-cover rounded-full" src={image} alt={name} />
                        </div>
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <p className="text-gray-700 text-sm mb-4">{email}</p>
                    </div>
                    <div>
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
            </div>
            <div className='flex justify-center'>
                <Link to="/"><button className="px-4 py-2 bg-gray-500 text-white rounded-full focus:outline-none">Back to Home</button></Link>
            </div>
        </div>
    )
}

export default UserDetails
