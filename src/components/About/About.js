import React from "react"
import aboutStyles from "./about.module.css"
import meImage from "../../../static/me.jpg"

export default function About() {
  return (
    <div className={aboutStyles.aboutpanel}>
      <div className={aboutStyles.container}>
        <h1 className={aboutStyles.title}>Welcome!</h1>
        <p className={aboutStyles.paragraph}>
          My name is <span className={aboutStyles.name}>Matthew Stobo</span>. I
          am a <span className={aboutStyles.role}>Full-stack Developer</span> &{" "}
          <span className={aboutStyles.role}>Technical Project Manager</span>{" "}
          from{" "}
          <span className={aboutStyles.location}>Melbourne, Australia.</span>
        </p>
        <p className={aboutStyles.paragraph}>
          I am fond of{" "}
          <span className={aboutStyles.language}>Javascript [React, Node]</span>
          ,{" "}
          <span className={aboutStyles.qa}>
            Automated Testing [Cypress, Puppeteer]{" "}
          </span>
          and my{" "}
          <span className={aboutStyles.name}>
            dogs{" "}
            <span role="img" alt="Waving hand" aria-label="Wave">
              🐶
            </span>
          </span>
        </p>

        <a className={aboutStyles.contactBtn} href="mailto:mjstobo@gmail.com">
          Say Hello?{" "}
          <span
            className={aboutStyles.wave}
            role="img"
            alt="Waving hand"
            aria-label="Wave"
          >
            👋
          </span>
        </a>
      </div>
      <div className={aboutStyles.container}>
        <img
          className={aboutStyles.profileImg}
          alt="Matthew Stobo"
          src={meImage}
        ></img>
      </div>
    </div>
  )
}
