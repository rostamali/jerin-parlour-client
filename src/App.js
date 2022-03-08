import React, { createContext } from 'react';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './dashboard/Dashboard/Dashboard';
import BookingList from './dashboard/Customer/BookingList/BookingList';
import Review from './dashboard/Customer/Review/Review';
import OrderList from './dashboard/Admin/OrderList/OrderList';
import AddService from './dashboard/Admin/AddService/AddService';
import Manage from './dashboard/Admin/Manage/Manage';
import useFirebase from './hooks/useFirebase';
import UserRoute from './shared/UserRoute/UserRoute';
import AdminRoute from './shared/AdminRoute/AdminRoute';

export const MyContext = createContext();

function App() {

  const { newUser, loading } = useFirebase();

  return (
    <>
      <MyContext.Provider value={{newUser, loading}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="booking-list" element={<UserRoute><BookingList /></UserRoute>} />
              <Route path="review" element={<UserRoute><Review /></UserRoute>} />
              <Route path="order-list" element={<AdminRoute><OrderList /></AdminRoute>} />
              <Route path="new-service" element={<AdminRoute><AddService /></AdminRoute>} />
              <Route path="manage-service" element={<AdminRoute><Manage /></AdminRoute>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
