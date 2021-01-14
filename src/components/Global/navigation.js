import React from "react"
import navigationStyles from './navigation.module.css';

export default function Navigation() {
  return (
  <nav className={navigationStyles.nav}>
     <span className={navigationStyles.wordmark}>Matthew Stobo</span>
      <ul className={navigationStyles.navlist}>
          <li className={navigationStyles.item}>
              Work
          </li>
          <li className={navigationStyles.item}>
              Skills & Experience
          </li>
          <li className={navigationStyles.item}>
              Contact
          </li>
      </ul>
  </nav>)
}