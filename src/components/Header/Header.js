import React from "react";
import ViewAll from "./ViewAll";
import "./Header.css";
import { Button } from "antd";

const Header = ({logout, user}) => {
  let name = `    ${user.name}`;
  return (
    <div className="header" style={{display:"flex", justifyContent:"center"}}>

      <div >
        <h1 style={{ color:"black"}}>Nobroker Forum</h1>
      </div>

      <div  style={{ position : "absolute" , right : "1rem" ,top : "2.2rem" ,fontSize:"1rem", display:"flex", alignItems:"center", borderRadius:"20px"}}>
        Hello <span style={{color:"red", fontSize:"1.3rem", marginLeft:"8px"}}>{name}</span>
      </div>
  
    </div>
  );
};

export default Header;
