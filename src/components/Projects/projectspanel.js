import React from "react"
import projectsStyles from "./projects.module.css"

export default function ProjectsPanel() {
  return (
    <div className={projectsStyles.panel}>
      <img
        src="https://source.unsplash.com/600x600/?code,developer"
        alt="Zap Spotify"
      ></img>

      <div className={projectsStyles.content}>
        <h5 className={projectsStyles.featuredTitle}>Featured project</h5>
        <h2>Zap Spotify</h2>
        <p>
          A Themed Playlist application that allows users to find related
          keywords to their theme, and then use those keywords to immediately
          search Spotify for related tracks!
        </p>
        <p>
          A full-stack application comprised of a React client and NodeJS API
          back-end. Integrated with Spotify API to allow users to search, play
          and add songs to playlists. Datamuse API allows the user to search for
          related keywords and immediately use those in a Spotify search.
        </p>
        <div className={projectsStyles.ctaPanel}>
          <a
            href="https://zap-spotify.herokuapp.com"
            target="_blank"
            rel="noreferrer"
            className={projectsStyles.ctaBtn}
          >
            View app
          </a>
          <a
            href="https://github.com/mjstobo/zap-spotify"
            target="_blank"
            rel="noreferrer"
            className={projectsStyles.ctaBtn}
          >
            View code
          </a>
        </div>
      </div>
    </div>
  )
}
