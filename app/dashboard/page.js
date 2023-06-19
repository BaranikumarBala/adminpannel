"use client"
import "./Dashboard.css"
import PieChart from './Storage';
import LineChart from './Latesthits';
import NotificationList from './Notification';
import OrdersList from './OrdersList';
import BarChart from './Performance';
import Topbar from './topbar'
import Footer from "./footer";
export default function Dashboard ()
{
    return( 
           <>
             <Topbar/>
            <div className="container">
                <div className="welcomeBox">
                <span>Welcome back,</span> <h1> Admin</h1> 
                </div>
                            
                <div className="charts">
                    <div className="lateshits-chart">
                        <LineChart/>
                    </div>  
                    <div className="performance-chart">
                        <BarChart/>
                    </div>    
                    <div className="storage-chart">
                        <PieChart/>
                    </div>
                    <div className="notification-chart">
                        <NotificationList/>
                    </div>
                    <div className="table-data">
                        <OrdersList/>
                    </div>
                </div>                 
            </div>
            <Footer/>
            </>
          )
}