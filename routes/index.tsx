import About from "../components/About.tsx";
import BallpitSection from "../islands/BallpitSection.tsx";
import Hero from "../components/Hero.tsx";
import NavBar from "../components/NavBar.tsx";
import Projects from "../components/Projects.tsx";
import Resume from "../components/Resume.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />
      <About />
      <Projects />
      <Resume />
      <BallpitSection />
    </>
  );
}
