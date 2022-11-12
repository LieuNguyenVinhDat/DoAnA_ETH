import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
  return (
  <div className="sidebar">
    <div className="top"> <span className="logo">lamadmin</span>
    </div>
    <hr />
    <div className="center">
    <ul>
        <p className="title">MAIN</p>

        <li>
        <DashboardIcon className="icon"/>
            <span>Dashboard</span>
        </li>
        <p className="title">MAIN</p>
    
    
        <li>
        <PersonOutlineOutlinedIcon className="icon"/>
            <span>User</span>
        </li>
   
 
        <li>
        <Inventory2Icon className="icon"/>
            <span>Products</span>
        </li>
  
  
        <li>
        <AccountBalanceWalletIcon className="icon"/>
            <span>Orders</span>
        </li>
        <li>
        <ShoppingCartIcon className="icon"/>
            <span>Delivery</span>
        </li>
        <p className="title">USERFUL</p>
        <li>
        <QueryStatsIcon className="icon"/>
            <span>Stats</span>
        </li>
        <li>
        <NotificationsNoneOutlinedIcon className="icon"/>
            <span>Notifications</span>
        </li>
        <p className="title">SERVICE</p>
        <li>
        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
            <span>System healh</span>
        </li>
        <li>
        <BookOutlinedIcon className="icon"/>
            <span>Logs</span>
        </li>
        <li>
        <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
        <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
        </li>
        <li>
        <LogoutOutlinedIcon className="icon"/>
            <span>Logout</span>
        </li>

    </ul>
    </div>
    <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
    </div>
  </div>
  );
};
export default Sidebar;
