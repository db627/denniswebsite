import Navigation from "./navigation/navigation";
import Hero from "./hero/hero";

export default function Layout({ children }) {
    return (
      <div>
        <Navigation />
        <Hero />
        <div>
            {children}
        </div>
      </div>
    );
  }