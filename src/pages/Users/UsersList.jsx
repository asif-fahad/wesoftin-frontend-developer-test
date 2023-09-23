import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../providers/ContextProviders';
import LoadingSpinner from '../../components/Reuseable/LoadingSpinner';

const UsersList = () => {
    const { users } = useContext(MyContext);

    // console.log(users);

    if (!users) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
            {users?.map(user => (
                <div key={user.id}>
                    <div className="w-8/12 mx-auto bg-gradient-to-r from-gray-300 to-slate-400 shadow-xl shadow-zinc-400 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 border hover:border-blue-700">
                        <div className="flex justify-center">
                            <img className="w-32 h-32 object-cover mt-10 rounded-full" src={user.image} alt="John Doe" />
                        </div>
                        <div className="py-6 px-6">
                            <h2 className="text-center font-bold text-xl mb-2">{user.name}</h2>
                            <p className="text-center text-gray-700 text-sm">{user.email}</p>
                            <div className="mt-4 flex justify-center">
                                <Link to={`/usersDetails/${user.id}`}>
                                    <button className="px-4 py-2 bg-gray-500 text-white rounded-full focus:outline-none">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default UsersList