import React from 'react';
import AboutMe from "../components/AboutMe";
import ProjectCards from '../components/ProjectCards';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <div id="home">
        <AboutMe />
      </div>
      <div id="project">
        <ProjectCards />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}
