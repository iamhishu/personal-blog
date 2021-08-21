import {
  container,
  cardTitle,
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-pro-react.js";

const loginPageStyle = (theme) => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
  },
  cardTitle: {
    ...cardTitle,
    color: whiteColor,
  },
  textCenter: {
    textAlign: "center",
  },
  justifyContentCenter: {
    justifyContent: "center !important",
  },
  customButtonClass: {
    "&,&:focus,&:hover": {
      color: whiteColor,
    },
    marginLeft: "5px",
    marginRight: "5px",
  },
  inputAdornment: {
    marginRight: "18px",
  },
  inputAdornmentIcon: {
    color: grayColor[6],
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  cardHeader: {
    marginBottom: "20px",
  },
  socialLine: {
    padding: "0.9375rem 0",
  },

  imgCon: {},
  socialList: {
    display: "inline-flex",
    "& li": {
      display: "flex",
      marginLeft: "10px",
      marginRight: "10px",
    },
    marginRight: "50px",
    "& .MuiSvgIcon-root": {
      fontSize: "2.5em",
      borderRadius: "8px",
      background: "#fff",
    },
    "& .home-social-icons": {
      color: "#0bacec",
    },
  },
  aboutContainer: {
    "& .home-about-section": {
      position: "relative",
      paddingBottom: "70px !important",
      paddingTop: "70px !important",
    },
    "& .home-about-description": {
      color: "#fff !important",
      //  paddingTop: "100px !important",
      paddingBottom: "20px !important",
      textAlign: "center",
    },

    "& .home-about-body": {
      // paddingTop: "50px",
      fontSize: "1.4em !important",
      // textAlign: "center",
    },
  },

  aboutWrapper: {
    "& .customCard": {
      background: "none !important",
      boxShadow: "none !important",
    },
    "& p": {
      fontSize: "21px",
      fontWeight: 400,
      fontStyle: "none",
    },
    "& ul": {
      fontSize: "21px",
      fontWeight: 400,
      fontStyle: "none",
      color: "#fff",
    },
    "& .img-fluid": {
      maxWidth: "100%",
      height: "auto",
    },
    "& .service-heading": {
      fontWeight: "800",
    },
  },
});

export default loginPageStyle;
