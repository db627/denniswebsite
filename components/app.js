import Hero from './hero/hero';
import Experience from './expereince';
import AboutMe from './about/about';
import Projects from './skills/projects';
import Skills from './skills/skills';
import Footer from './footer/footer';
import SideNav from './sidenav';


function App() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen overflow-x-hidden">
      <SideNav />
      {/* Use 'ml-24' only on medium and larger screens */}
      <main className="md:ml-24"> {/* 'md:ml-24' applies margin only on medium screens and above */}
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
