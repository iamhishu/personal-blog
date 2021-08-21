import React, { useRef } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
import Typewriter from "typewriter-effect";

// @material-ui/icons
// import Face from "@material-ui/icons/Face";
// import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import enggImg from "../../assets/img/header-bg-1.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import myAvtar from "../../assets/img/avatar.svg";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles(styles);

export default function LoginPage() {
  //const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  //   React.useEffect(() => {
  //     let id = setTimeout(function () {
  //       setCardAnimation("");
  //     }, 700);
  //     // Specify how to clean up after this effect:
  //     return function cleanup() {
  //       window.clearTimeout(id);
  //     };
  //   });

  const classes = useStyles();

  const scrollToRef = (con) => {
    con.current.scrollIntoView({ behavior: "smooth" });
  };
  const mainContainer = useRef(null);
  /** Scroll down  */
  const executeScroll = () => scrollToRef(mainContainer);
  return (
    <GridItem
      md={12}
      style={
        {
          //padding: "40vh",
        }
      }
      justify="center"
    >
      <GridContainer
        style={{
          marginLeft: "-16px",
          width: "106%",
          height: "auto",
          backgroundImage: `url(${enggImg})`,
          textAlign: "center",
          color: "white",
          backgroundColor: "#333333",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className={classes.container}
      >
        {/* <GridContainer justify="center"> */}
        <GridItem
          md={12}
          style={
            {
              //padding: "40vh",
            }
          }
          //container={}
          //justify="center"
        >
          <h1
            className="heading"
            style={{ marginTop: "25vh", paddingBottom: "15px" }}
          >
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="heading-name">
            {"I'M"}
            <strong className="main-name"> Hitesh Chaudhary</strong>
          </h1>
          <div>
            <div className="Typewriter" data-testid="typewriter-wrapper">
              <h2 style={{ fontWeight: "600" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Developer",
                      "Deep Learning Engineer",
                      "Mern Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <p
                style={{
                  fontSize: "small",
                  fontWeight: 700,
                  fontFamily: "fantasy",
                }}
              >
                {" "}
                Portfolio{" "}
              </p>
              <p
                style={{
                  color: "grey",
                  fontSize: "small",
                }}
              >
                1.0.0-beta
              </p>
              <ExpandMoreIcon
                href="aboutMeCon"
                onClick={executeScroll}
                fontSize="large"
              />
            </div>
          </div>
        </GridItem>
      </GridContainer>

      <GridContainer
        style={{
          width: "100%",
          height: "auto",
          paddingTop: "100px",
        }}
        id="about"
        className={classes.aboutContainer}
        //   className={classes.container}
      >
        <GridItem
          id="aboutMeCon"
          md={8}
          className="home-about-description"
          //justify="center"
          //container="true"
          style={{ textAlign: "center" }}
        >
          <h1
            ref={mainContainer}
            style={{ fontSize: "2.6em", fontWeight: "400" }}
          >
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷&zwj;♂️
            <br />
            <br />I am fluent in classics like
            <i>
              <b className="purple"> Php, Javascript and Reactjs. </b>
            </i>
            <br /> <br />
            My field of {"Interest's"} are building new &nbsp;
            <i>
              <b className="purple">Web Technologies and Products </b> and also
              in areas related to <b className="purple">Php and React js</b>
            </i>
            <br /> <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">React.js</b> and
            <i>
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="purple"> React.js and Next.js</b>
            </i>
          </p>
        </GridItem>
        <GridItem
          md={4}
          className="myAvtar"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              willChange: "transform",
              transform:
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            }}
          >
            <img src={myAvtar} className="img-fluid" alt="avatar" />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer
        style={{
          width: "100%",
          height: "auto",
        }}
        // justify="center"
        //   className={classes.container}
      >
        <GridItem md={12} className="myAvtar" style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "500" }}>FIND ME ON</h1>
          <p style={{ fontSize: "1.3em", marginTop: "-25px" }}>
            Feel free to connect with me{" "}
          </p>
          {/* GitHubIcon  TwitterIcon InstagramIcon LinkedInIcon */}
          <ul className={classes.socialList}>
            <li className="social-icons">
              <a
                href="https://github.com/iamhishu"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <GitHubIcon fill="#fff" fontSize="larger" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/its_hishu"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <TwitterIcon fill="#fff" fontSize="larger" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/its_hishu/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <InstagramIcon fill="#fff" fontSize="larger" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/its-hishu"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <LinkedInIcon fill="#fff" fontSize="larger" />
              </a>
            </li>
          </ul>
        </GridItem>
      </GridContainer>
    </GridItem>
  );
}
