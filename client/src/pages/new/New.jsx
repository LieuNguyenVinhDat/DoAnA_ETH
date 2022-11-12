import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
            <h1>Add New User</h1>
        </div>
        <div className="bottom">
            <div className="left">
              <img
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt=""
              /> 
            </div>
            <div className="right">
                <form>
                    <div className="formInput">
                        <label>Username</label>
                        <input type="text" placeholder="john_doe"/>
                    </div>
                    <div className="formInput">
                        <label>Name and surname</label>
                        <input type="text" placeholder="john doe"/>
                    </div>
                    <div className="formInput">
                        <label>Email</label>
                        <input type="email" placeholder="john_doe@gmail.com"/>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default New;
