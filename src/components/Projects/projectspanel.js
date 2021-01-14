import React from "react"
import projectsStyles from "./projects.module.css"

export default function ProjectsPanel() {
  return (
    <div className={projectsStyles.panel}>
      <img src="https://source.unsplash.com/500x500/?coding,programming,code"></img>

      <div className={projectsStyles.content}>
        <p>
          A Themed Playlist application that allows users to find related
          keywords to their theme, and then use those keywords to immediately
          search Spotify for related tracks!
        </p>
        <p>
          A full-stack application comprised of a React client and NodeJS API
          back-end. Integrated with Spotify API via OAuth2.
        </p>
      </div>
    </div>
  )
}
