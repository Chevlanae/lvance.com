import About from "../components/About.tsx";
import Contact from "../components/Contact.tsx";
import Hero from "../components/Hero.tsx";
import NavBar from "../components/NavBar.tsx";
import Projects from "../components/Projects.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
