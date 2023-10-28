import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import triPPPimage from "../../Assets/triPPPimage.png";
import MuiDrawertwo from "./MuiDrawertwo";
import Navbar from "./Navbar";
import LoginButton from "../../Components/Auth/LoginButton";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  // console.log(theme);
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#F49867" }}>
        <Toolbar sx={{ width: "50%", margin: "0auto" }}>
          <div>
            <img src={triPPPimage} alt="" className="imagelogo" />
          </div>
          <MuiDrawertwo />
          {/* {isMatch ? ( */}
          <>
            <Typography
              sx={{ fontSize: "2rem", paddingLeft: "10px" }}
              className="logoname"
            ></Typography>
          </>
          {/* ) : ( */}
          <></>
        </Toolbar>
        <LoginButton />
      </AppBar>
      
    </React.Fragment>
  );
};

export default Header;
