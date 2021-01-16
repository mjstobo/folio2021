import React from "react"
import skillStyles from "./skills.module.css"

export default function Skills() {
  return (
    <div className={skillStyles.skills}>
      <div className={skillStyles.intro}>
        {" "}
        <h2>Skills & Experience</h2>
        <div className={skillStyles.panelContainer}>
          <div className={skillStyles.widePanel}>
            <h3 className={skillStyles.titleRow}>Technologies</h3>
            <div className={skillStyles.skillsList}>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-react-original"></i>
              <i className="devicon-nodejs-plain"></i>
              <i className="devicon-express-original"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-html5-plain"></i>
              <i className="devicon-git-plain"></i>
            </div>
          </div>
          <div className={skillStyles.panel}>
            <div className={skillStyles.titleRow}>
              <h3>Employment</h3>
            </div>
            <p className={skillStyles.detailRow}>
              Luminary<span className={skillStyles.date}>2016 - Present</span>
            </p>
            <p className={skillStyles.subdetail}>
              Senior Digital Producer & QA Team Lead
            </p>
          </div>
          <div className={skillStyles.panel}>
            <div className={skillStyles.titleRow}>
              <h3>Education</h3>
            </div>
            <p className={skillStyles.detailRow}>
              Monash University
              <span className={skillStyles.date}>2013 - 2016</span>
            </p>
            <p className={skillStyles.subdetail}>
              Bachelor of Information Technology & Systems [Application
              Development]
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
