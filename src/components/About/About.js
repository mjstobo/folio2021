import React from "react"
import aboutStyles from "./about.module.css"

export default function About() {
  return (
    <div className={aboutStyles.aboutpanel}>
      <h1 className={aboutStyles.title}>Welcome!</h1>
      <p className={aboutStyles.paragraph}>
        My name is <span className={aboutStyles.name}>Matthew Stobo</span>. I am
        a <span className={aboutStyles.role}>Full-stack Developer</span> from{" "}
        <span className={aboutStyles.location}>Melbourne, Australia.</span>
      </p>
      <p className={aboutStyles.paragraph}>
        I am fond of{" "}
        <span className={aboutStyles.language}>Javascript [React, Node]</span>{" "}
        and{" "}
        <span className={aboutStyles.qa}>
          Automated Testing [Cypress, Puppeteer].{" "}
        </span>
      </p>

      <button className={aboutStyles.contactBtn}>
        Say Hello?{" "}
        <span
          className={aboutStyles.wave}
          role="img"
          alt="Waving hand"
          aria-label="Wave"
        >
          👋
        </span>
      </button>
    </div>
  )
}
