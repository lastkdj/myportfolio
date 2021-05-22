import { Fragment, useState } from "react";
import { Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <MenuIcon className="header_menuicon" onClick={handleClick} />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: { backgroundColor: "#f5f5f8" },
        }}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-66}
          duration={1000}
        >
          <MenuItem onClick={handleClose}>
            <Typography className="header_menuicon_text">HOME</Typography>
          </MenuItem>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
        >
          <MenuItem onClick={handleClose}>
            <Typography className="header_menuicon_text">ABOUT</Typography>
          </MenuItem>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <MenuItem onClick={handleClose}>
            <Typography className="header_menuicon_text">SKILLS</Typography>
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <Typography className="header_menuicon_text">WORK</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography className="header_menuicon_text">MORE</Typography>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
