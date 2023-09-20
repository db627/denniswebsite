import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Navigation from './navigation/navigation';
import About from './about/about';
import Hero from './hero/hero';
import Footer from './footer/footer';
import Skills from './skills/skills';
import Projects from './skills/projects';
import Contact from './contact/contact';
import Heading from './heading/heading';

export default function Layout({ children }) {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], ['100vh', '0vh']);

  return (
    <div className="bg-zinc-800">
      <Heading />
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <motion.div style={{ y: translateY }}>{children}</motion.div>
      <Contact />
      <Footer />
    </div>
  );
}
//bg-gradient-to-t from-white to-teal-500