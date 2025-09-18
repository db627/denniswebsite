import { motion } from 'framer-motion';
import Hero from './hero/hero';
import Experience from './expereince';
import AboutMe from './about/about';
import Projects from './skills/projects';
// import Skills from './skills/skills';
import Footer from './footer/footer';
// import SideNav from './sidenav';
import TopNav from './topnav';
import { AnimatedSection } from './ScrollAnimations';

function App() {
  return (
    <div className="relative bg-white text-black min-h-screen overflow-x-hidden">
      {/* Minimal Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
      </div>
      
      {/* Top Navigation */}
      <TopNav />
      
      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <Hero />
        
        {/* Experience Section */}
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        
        {/* About Section */}
        <AnimatedSection delay={0.2}>
          <AboutMe />
        </AnimatedSection>
        
        {/* Projects Section */}
        <AnimatedSection delay={0.3}>
          <Projects />
        </AnimatedSection>
        
        {/* Skills Section - Hidden temporarily */}
        {/* <AnimatedSection delay={0.4}>
          <Skills />
        </AnimatedSection> */}
        
        {/* Footer */}
        <AnimatedSection delay={0.5}>
          <Footer />
        </AnimatedSection>
      </main>

      {/* Minimal scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-black z-50 origin-left"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0 }}
      />
    </div>
  );
}

export default App;
