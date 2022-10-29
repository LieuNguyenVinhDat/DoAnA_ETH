import React, { Component } from "react";
import {} from "./SideBar.css";
import logo from "../img/logo.png";
import logoIcon from "../img/logo_icon.png";
// Be sure to include styles at some point, probably during your bootstraping
// import "@trendmicro/react-sidenav/dist/react-sidenav.css";
class Sidebar extends Component {
  
  render() {
    return (
        <view>
      <body>
        <div class="header" />
      
          <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
          <label for="openSidebarMenu" class="sidebarIconToggle">
            <div class="spinner diagonal part-1" />
            <div class="spinner horizontal" />
            <div class="spinner diagonal part-2" />
          </label>
      

        <div id="sidebarMenu">
          <ul class="sidebarMenuInner">
            <li>
              {/* <img src={logoIcon} alt="logo" width="100" height="50"/> */}
            </li>
            <li><a href="https://vanila.io" target="_blank" rel="noreferrer">Company</a></li>
      <li><a href="https://instagram.com/plavookac" target="_blank" rel="noreferrer">Instagram</a></li>
      <li><a href="https://twitter.com/plavookac" target="_blank" rel="noreferrer">Twitter</a></li>
      <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank" rel="noreferrer">YouTube</a></li>
      <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank" rel="noreferrer">Linkedin</a></li>
          </ul>
        </div>
        <div id="center" class="main center">
          <div class="mainInner">
            <div>
            </div>
          </div>
        </div>
      </body>
      </view>
    );
  }
}
export default Sidebar;
