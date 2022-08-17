import React from "react";
import ViewAll from "./ViewAll";
import "./Header.css";
import { Button } from "antd";
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from "@mui/material/Avatar";
import { Popconfirm } from 'antd';

import 'antd/dist/antd.css';

// or
import IconButton from '@mui/material/IconButton';


const UserDetails = ({user, logout})=>{

  return (

    <div>
      <div>
      Hello, <span style={{maringLeft:"5px", color:"#F29393"}}>{user.name}</span>
      </div>
      <div>
       
      </div>
      <div>      
        <div style={{display:"flex", justifyContent:"flex-end", color:"red", marginTop:"5px"}}>
          <Button onClick={logout} type="primary" danger>
           
            
          Logout
          </Button></div>

      </div>
    </div>
  )
}
const Header = ({logout, user}) => {
  let name = `    ${user.name}`;
  return (
    <div className="header" style={{display:"flex", justifyContent:"center"}}>

      <div >
        <h1 style={{ color:"black"}}>Nobroker Forum</h1>
      </div>

      <div  style={{ position : "absolute" , right : "1rem" ,top : "1.2rem" ,fontSize:"1rem", alignItems:"center", borderRadius:"20px"}}>
       <div style={{display:"flex", alignItems:"baseline",position:"relative"}}>
       <Popconfirm
        placement="bottomRight"
        title={
       <UserDetails user={user} logout={logout}/>
        }
        icon=""
        okText=""
        cancelText=""
        showCancel={false}
        okButtonProps={{style:{display:"none"}}}
      >
        <IconButton>
       <Avatar alt="Cindy Baker" src={user.image_url} />

       </IconButton>
      </Popconfirm>

           
           {/* <span style={{color:"#319DA0", fontSize:"1rem", marginLeft:"8px"}}>{name}</span> */}
       </div> 

      </div>
  
    </div>
  );
};

export default Header;
