import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import './Dashboard.css';
import {MyContext} from '../../App';

const Dashboard = () => {

    const { newUser } = useContext(MyContext);

    return (
        <>
            <div id="dashboard">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-12">
                        <DashboardMenu></DashboardMenu>
                    </div>
                    <div className="col-lg-9 col-md-8 col-12">
                        <div className="dashboard__top--bar">
                            <h5 className="user__name">{newUser.displayName}</h5>    
                        </div>
                        <div className="dashboard__container">
                            <Outlet></Outlet>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;