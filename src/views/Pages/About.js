import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputAdornment from "@material-ui/core/InputAdornment";
///import Icon from "@material-ui/core/Icon";

// @material-ui/icons
//import Face from "@material-ui/icons/Face";
//import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
//import CardHeader from "components/Card/CardHeader.js";
//import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import aboutme from "../../assets/img/about_me.png";
import phpsvg from "../../assets/img/php.svg";
import htmlsvg from "../../assets/img/html.svg";
import cssvg from "../../assets/img/css.svg";
import jssvg from "../../assets/img/js.svg";
import dbsvg from "../../assets/img/db.svg";

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer
        className={classes.aboutWrapper}
        justify="center"
        style={{ paddingTop: "10px" }}
      >
        <GridItem
          md={7}
          style={{
            paddingTop: "50px",
            justifyContent: "center",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ textAlign: "center", fontWeight: 500 }}>
            {" "}
            {"Know Who I'M"}{" "}
          </h1>{" "}
          <Card className="customCard">
            <CardBody>
              {" "}
              {/* <blockquote className="blockquote mb-0"> */}{" "}
              <p style={{ textAlign: "center" }}>
                Hi Everyone, I am{" "}
                <span className="purple" style={{ color: "#fff" }}>
                  Hitesh Chaudhary{" "}
                </span>
                from{" "}
                <span className="purple" style={{ color: "#fff" }}>
                  {" "}
                  Himachal, India.{" "}
                </span>{" "}
                <br /> <br /> I am a{" "}
                <span className="purple" style={{ color: "#fff" }}>
                  Software Developer{" "}
                </span>
                at Techmarbles(chandigarh), india. <br /> <br />
                Apart from coding, some other activities that I love to do !
              </p>{" "}
              <ul>
                <li className="about-activity">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z">
                      {" "}
                    </path>{" "}
                  </svg>{" "}
                  Playing Games{" "}
                </li>{" "}
                {/* <li className="about-activity">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                version="1.1"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z"></path>
                              </svg>{" "}
                              Reading & writing Tech Blogs
                            </li> */}{" "}
                <li className="about-activity">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z">
                      {" "}
                    </path>{" "}
                  </svg>{" "}
                  Travelling{" "}
                </li>{" "}
              </ul>{" "}
              {/* <p
                              style={{ marginBlockEnd: "0px", color: "rgb(155, 126, 172)" }}
                            >
                              {"Strive to build things that make a difference!"}
                            </p> */}{" "}
              {/* <footer className="blockquote-footer">hitesh</footer> */}{" "}
              {/* </blockquote> */}{" "}
            </CardBody>{" "}
          </Card>{" "}
        </GridItem>{" "}
        <GridItem md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }}>
          <img src={aboutme} alt="about" className="img-fluid" />
        </GridItem>
        <GridItem
          md={12}
          justifyContent="center"
          style={{ textAlign: "center" }}
        >
          <h2 className="skill-heading">
            Professional <strong className="purple"> Skills </strong>{" "}
          </h2>
          <p>
            Knowledge and technologies I use to create websites and applications{" "}
          </p>{" "}
          <GridContainer>
            <GridItem md={4}>
              <CardBody>
                <div className="fa-stack fa-1x mb-3">
                  <img src={phpsvg} alt="PHP" />
                </div>{" "}
                <h3 className="service-heading"> PHP </h3>{" "}
                <p className="text-muted">
                  I use PHP & nbsp; 7 language to develop web applications{" "}
                </p>{" "}
              </CardBody>{" "}
            </GridItem>{" "}
            <GridItem md={4}>
              <CardBody>
                <div className="fa-stack fa-1x mb-3">
                  <img src={htmlsvg} alt="HTML" />
                </div>{" "}
                <h3 className="service-heading"> REACT </h3>{" "}
                <p className="text-muted">
                  I use REACT to make better UserInterface for users.{" "}
                </p>{" "}
              </CardBody>{" "}
            </GridItem>{" "}
            <GridItem md={4}>
              <CardBody>
                <div className="fa-stack fa-1x mb-3">
                  <img src={jssvg} alt="HTML" />
                </div>{" "}
                <h3 className="service-heading"> JAVASCRIPT </h3>{" "}
                <p className="text-muted">
                  I use JavaScript to make user experience better{" "}
                </p>{" "}
              </CardBody>{" "}
            </GridItem>{" "}
            <GridItem md={4}>
              <CardBody>
                <div className="fa-stack fa-1x mb-3">
                  <img src={phpsvg} alt="PHP" />
                </div>{" "}
                <h3 className="service-heading"> PHP </h3>{" "}
                <p className="text-muted">
                  I use GitHub for control over multiple projects(repos).{" "}
                </p>{" "}
              </CardBody>{" "}
            </GridItem>{" "}
            <GridItem md={4}>
              <CardBody>
                <div className="fa-stack fa-1x mb-3">
                  <img src={cssvg} alt="CSS" />
                </div>{" "}
                <h3 className="service-heading"> CSS </h3>{" "}
                <p className="text-muted">
                  I use CSS to make look and feel better{" "}
                </p>{" "}
              </CardBody>{" "}
            </GridItem>{" "}
            <GridItem md={4}>
              <CardBody>
                <div className="fa-stack fa-1x mb-3">
                  <img src={dbsvg} alt="PHP" />
                </div>{" "}
                <h3 className="service-heading"> Database </h3>{" "}
                <p className="text-muted">
                  I use relational databases MySQL to store data{" "}
                </p>{" "}
              </CardBody>{" "}
            </GridItem>{" "}
          </GridContainer>{" "}
        </GridItem>{" "}
      </GridContainer>{" "}
    </div>
  );
}
