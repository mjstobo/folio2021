import React from "react"
import footerStyles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.footerConter}>
        <h3>Contact Me</h3>
        <form className={footerStyles.form}>
          <input className={footerStyles.formInput} type="name" placeholder="your name"></input>
          <input className={footerStyles.formInput} type="message" placeholder="how can I help"></input>
          <input className={footerStyles.formInput} type="email" placeholder="e-mail address"></input>
          <input className={footerStyles.formSubmit} type="submit" value="Say Hello!"></input>
        </form>
      </div>
    </div>
  )
}
