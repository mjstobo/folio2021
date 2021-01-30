import React, { useState } from "react"
import footerStyles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <h2 className={footerStyles.footerTitle}>
        Say Hello!{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h2>
      <p className={footerStyles.introText}>I'd love to hear from you!</p>
      <div className={footerStyles.footerContainer}>
        <form
          action="https://getform.io/f/595c0523-053e-4123-bf83-38903511f9be"
          method="POST"
          className={footerStyles.form}
        >
          <input
            className={footerStyles.formInput}
            type="text"
            name="name"
            placeholder="Name"
            maxlength="100"
            required
          />
          <input
            className={footerStyles.formInput}
            type="email"
            name="email"
            placeholder="E-mail address"
            maxlength="30"
            required
          />
          <textarea
            className={footerStyles.formInput}
            type="text"
            name="message"
            placeholder="How can I help?"
            maxlength="1000"
            required
          />
          <button className={footerStyles.formSubmit} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
