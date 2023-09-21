import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/users/usersSlice';
// import userReducer from './features/users/userSlice';

const store = configureStore({
    reducer: {
        userReducer: userReducer,
    },
})

export default store;