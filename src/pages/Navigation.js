import * as React from "react";
import { Outlet, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const tabStyle = {
  textDecoration: "none",
  padding: "8px"
};

const TabLink = (props) => {
  return (
    <NavLink
      style={tabStyle}
      className={({ isActive }) => (isActive ? "active" : "inactive")}
      to={props.to}
    >
      {props.label}
    </NavLink>
  );
};
const Navigation = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <TabLink to="/" label="Home" />
            <TabLink to="/create" label="Create" />
            <TabLink to="/help" label="Help" />
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </>
  );
};

export default Navigation;
