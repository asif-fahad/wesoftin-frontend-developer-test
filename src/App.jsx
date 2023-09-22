import { useDispatch } from 'react-redux'
import './App.css'
import { useEffect } from 'react';
import { setUsers } from './redux/features/users/usersSlice';
import Navbar from './components/Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/users.json')
      .then(res => res.json())
      .then(data => dispatch(setUsers(data)))
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <div className='my-7 min-h-[calc(100vh-68px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </>
  )
}

export default App
