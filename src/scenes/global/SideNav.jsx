import {Sidebar, Menu, MenuItem, useProSidebar} from "react-pro-sidebar"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

import "./Sidebar.css"

import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CreateIcon from '@mui/icons-material/Create';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, Box, Typography } from "@mui/material";
import { menuClasses } from "react-pro-sidebar";


const SideNav = () => {

  const {collapseSidebar} = useProSidebar()

  const [collapsed, setCollapsed] = useState(false)
  const [isActive, setIsActive] = useState(window.location.pathname)

  const handleClick = () => {
    setCollapsed(!collapsed)
    collapseSidebar()
  }

  const handleActive = () => {
    setIsActive(window.location.pathname)
  }

  return(
    <Sidebar style={{background:""}}>
      <Menu 
      style={{paddingTop:"10px"}}
      menuItemStyles={{
          button: ({ level, active }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                backgroundColor: active ? 'black' : undefined,
                color: active ? 'white' : undefined,
                '&:hover': {
                  backgroundColor: active? "black" : "darkgray",
                  color: active? "white" : "black"
                }
              }
          },
        }} >
        
        <MenuItem 
          rootStyles={{
            ['.' + menuClasses.button]: {
              '&:hover': {
                backgroundColor: '#FBFBFB',
                cursor: "default"
              },
            },
          }}
        >
          <Box display="flex" justifyContent="space-between">
            {collapsed ? null : (
              <Typography style={{paddingTop: "10px", color:"black", fontWeight:"bold"}}>
                Nabeel's Blog
              </Typography>)}
            <IconButton style={{color: "black"}} onClick={handleClick}>
              {collapsed ? <ChevronRightIcon /> : <CloseIcon />}
            </IconButton>
          </Box>

        </MenuItem>


        {collapsed ? null : (
        <Box display="flex" justifyContent="center" textAlign="center" padding="20px 0 25px 0">
          <img 
            width="150px" 
            height="150px" 
            style={{borderRadius: "75px"}}
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1280px-Cat03.jpg"} alt=""
          />
        </Box>)}

        <MenuItem  
          icon={<HomeIcon />} 
          routerLink={<Link to="/"/>} 
          onClick={handleActive}
          active= {isActive === "/" ? true : false }>
          Home
        </MenuItem>

        <MenuItem 
          icon={<FormatListBulletedIcon />}
          routerLink={<Link to="/posts"/>}
          onClick={handleActive}
          active= {isActive === "/posts" ? true : false}>
          My Posts
        </MenuItem>
        
        <MenuItem
          icon={<CreateIcon />}
          routerLink={<Link to="/newpost"/>}
          onClick={handleActive}
          active= {isActive === "/newpost" ? true : false}>
          New Post
        </MenuItem>
      
      </Menu>
    </Sidebar>

  )
}

export default SideNav