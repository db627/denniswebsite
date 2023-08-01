import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Navigation from './navigation/navigationresume';
import Heading from './heading/heading_resume';
import Footer from './footer/footer';
import Resumebody from './resumebody/resumebody';

export default function Layout({ children }) {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], ['100vh', '0vh']);

  return (
    <div className="bg-white" >
    <Heading />
      <Navigation />
      <Resumebody/>
      <motion.div style={{ y: translateY }}>
        {children}
      </motion.div>
      <Footer /> 
    </div>
  );
}
//bg-gradient-to-br from-color1 via-color2 to-color3