import React from "react"
import Header from "../components/global/header"
import About from "../components/About/About"
import Projects from "../components/Projects/projects"
import Footer from "../components/global/footer"
import Skills from "../components/Skills/Skills"
import Container from "../components/Global/container"
import { Helmet } from "react-helmet"
import "../styles/global.css"
import "../styles/devicon-master/devicon.min.css"

export default function Home() {
  return (
    <Container>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Matthew Stobo - Fullstack Developer</title>
          <link rel="canonical" href="http://mjstobo.com" />
        </Helmet>
      </div>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </Container>
  )
}
