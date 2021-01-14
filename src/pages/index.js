import React from "react"
import Header from "../components/global/header"
import About from "../components/About/About"
import Projects from "../components/Projects/projects"
// import Footer from "../components/global/footer"
import Skills from "../components/Skills/Skills"
import Container from "../components/Global/container"
import "../styles/global.css"
import "../styles/devicon-master/devicon.min.css"

export default function Home() {
  return (
    <Container>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
    </Container>
  )
}
