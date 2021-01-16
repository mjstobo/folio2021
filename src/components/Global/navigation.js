import React from "react"
import navigationStyles from "./navigation.module.css"

export default function Navigation() {
  return (
    <nav className={navigationStyles.nav}>
      <span className={navigationStyles.wordmark}>Matthew Stobo</span>
      <ul className={navigationStyles.navlist}>
        <li className={navigationStyles.item}>
          <a
            href="https://www.github.com/mjstobo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className={navigationStyles.item}>
          <a
            href="https://www.linkedin.com/in/mjstobo"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={navigationStyles.item}>
          <a href="mailto: mjstobo@gmail.com" target="_blank" rel="noreferrer">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  )
}
