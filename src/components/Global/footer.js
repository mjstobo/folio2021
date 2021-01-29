import React from "react"
import footerStyles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <h2 className={footerStyles.footerTitle}>Say Hello!</h2>

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
          />
          <input
            className={footerStyles.formInput}
            type="email"
            name="email"
            placeholder="E-mail address"
          />
          <input
            className={footerStyles.formInput}
            type="text"
            name="message"
            placeholder="How can I help?"
          />
          <button className={footerStyles.formSubmit} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
