import React, { createContext, useEffect } from 'react'
import { useSelector } from 'react-redux';

export const MyContext = createContext(null);

const ContextProviders = ({ children }) => {

    const { users } = useSelector((state) => state.userReducer);

    if (!users) {
        return <LoadingSpinner></LoadingSpinner>
    }


    const data = {
        users,
    };

    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProviders;