import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Navigation from './navigation/navigation2';
import Heading from './heading/heading_privacy';
import Footer from './footer/footer';
import Privacybody from './privacy/privacy';

export default function Layout({ children }) {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], ['100vh', '0vh']);

  return (
    <div className="bg-gradient-to-br from-color1 via-color2 to-color3" >
      <Heading />
      <Navigation />
      <Privacybody />
      <motion.div style={{ y: translateY }}>
        {children}
      </motion.div>
      <Footer /> 
    </div>
  );
}
