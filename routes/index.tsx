import About from "../components/About.tsx";
import Hero from "../components/Hero.tsx";
import NavBar from "../components/NavBar.tsx";
import Projects from "../components/Projects.tsx";
import Contact from "../components/Contact.tsx";

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
