import React from "react"
import projectsStyles from "./projects.module.css"
import ProjectsPanel from "./projectspanel"

export default function Projects() {
  return (
    <div className={projectsStyles.projects}>
      <div className={projectsStyles.intro}>
        <h2>Work</h2>
        <p>You can view more on my GitHub profile.</p>
      </div>
      <div className={projectsStyles.panelContainer}>
        <ProjectsPanel></ProjectsPanel>
      </div>
    </div>
  )
}
