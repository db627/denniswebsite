import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Navigation from './navigation/navigation';
import About from './about/about2';
import Hero from './hero/hero';
import Footer from './footer/footer';
import Skills from './skills/skills';
import Form from './form/form'
import Heading from './heading/heading';

export default function Layout({ children }) {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], ['100vh', '0vh']);

  return (
    <div className="bg-gradient-to-br from-white to-teal-500">
      <Heading />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <motion.div style={{ y: translateY }}>
        {children}
      </motion.div>
      <Form />
      <Footer /> 
    </div>
  );
}
