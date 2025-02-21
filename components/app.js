import Hero from './hero/hero';
import Experience from './expereince';
import AboutMe from './about/about';
import Projects from './skills/projects';
import Skills from './skills/skills';
import Footer from './footer/footer';
import SideNav from './sidenav';
import HeroAnimation from './hero/heroAnimation';

function App() {
  return (
    <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 text-white min-h-screen overflow-x-hidden">
      {/* Particle Background */}
      <HeroAnimation />
      
      
      {/* Main Content */}
      <main className="relative z-10  "> {/* Ensures content is above the particles */}
      <SideNav />
      <div className="bg-gradient-to-br from-gray-800 to-gray-900">
        <Experience />
        </div>
        <AboutMe />
        <Projects />
        <div className='bg-gradient-to-br from-gray-800 to-gray-900'>
        <Skills />
        <Footer />
        </div>
      </main>
    </div>
  );
}
// comment
export default App;
