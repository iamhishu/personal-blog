import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// @material-ui/icons
//import Dashboard from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import Menu from "@material-ui/icons/Menu";

import AccountTreeIcon from "@material-ui/icons/AccountTree";
import GitHubIcon from "@material-ui/icons/GitHub";
//import Home from "../../views/Pages/Home";
// core components

import PersonIcon from "@material-ui/icons/Person";
import Button from "components/CustomButtons/Button";
import styles from "assets/jss/material-dashboard-pro-react/components/authNavbarStyle.js";

const useStyles = makeStyles(styles);

export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const classes = useStyles();
  const { color, brandText } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color,
  });
  var list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/home"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/home"),
          })}
        >
          <HomeIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Home"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/about"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/about"),
          })}
        >
          <PersonIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"About"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/projects"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/projects"),
          })}
        >
          <AccountTreeIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Projects"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/personal"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/personal"),
          })}
        >
          <CodeIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Personal"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          target="_blank"
          href="https://github.com/iamhishu"
          //  to={"https://github.com/iamhishu"}
          style={{
            background: "#a55cbe",
            width: "90px",
            color: "rgb(0, 0, 0)",
            height: "47px",
            textAlign: "center",
          }}
          className={cx(classes.navLink)}
        >
          <AccountTreeIcon className={classes.listItemIcon} />
          <GitHubIcon className={classes.listItemIcon} />
          {/* <ListItemText
            primary={"Lock"}
            disableTypography={true}
            className={classes.listItemText}
          /> */}
        </Button>
      </ListItem>
    </List>
  );
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              MD Pro React
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
