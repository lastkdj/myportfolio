import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import Menu from "./Menu";

export interface Props {}

const Header: React.FC<Props> = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop: boolean = window.scrollY < 76;

      if (isTop === false) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    const proxyEmpty = () => {};
    return () => {
      window.removeEventListener("scroll", proxyEmpty);
    };
  }, []);

  return (
    <Grid
      container
      justify="center"
      className={scrolled ? "sticky" : "container"}
    >
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-66}
        duration={1000}
      >
        <Grid container item xs={4} md={3} justify="center" alignItems="center">
          <Typography className="header_name_logo">{"<RG/>"}</Typography>
        </Grid>
      </Link>

      {isTabletOrMobile ? (
        <Grid container item xs={6} sm={8} md={6} className="header_menu">
          <Menu />
        </Grid>
      ) : (
        <Grid
          container
          item
          xs={6}
          sm={8}
          md={7}
          justify="center"
          className="header_menu"
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-66}
            duration={1000}
          >
            <Typography className="header_menu_text">HOME</Typography>{" "}
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            <Typography className="header_menu_text">ABOUT</Typography>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Typography className="header_menu_text">SKILLS</Typography>{" "}
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-66}
            duration={1000}
          >
            <Typography className="header_menu_text">PROJECTS</Typography>
          </Link>
          <Typography className="header_menu_text">WORK</Typography>
          <Typography className="header_menu_text">CONTACT</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
