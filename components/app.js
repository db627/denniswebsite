import Hero from './hero/hero';
import Experience from './expereince';
import AboutMe from './about/about';
import Projects from './skills/projects';
import Skills from './skills/skills';
import Footer from './footer/footer';
import SideNav from './sidenav';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen">
      <SideNav />
      <main className="ml-24"> {/* Adds space for the side nav */}
        <Hero />
        <Experience />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;
