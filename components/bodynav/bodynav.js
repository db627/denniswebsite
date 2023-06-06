import { useState, useEffect } from "react";

const ScrollspyNav = ({ ids }) => {
  const [activeId, setActiveId] = useState("");
  const [offsets, setOffsets] = useState([]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const currentIndex = offsets.findIndex(
        (offset) => offset > scrollPosition
      );
      const nextIndex =
        currentIndex === -1 ? ids.length - 1 : Math.max(0, currentIndex - 1);
      setActiveId(ids[nextIndex]);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <nav className="flex flex-col fixed" id="scrollspy">
        {ids.map((id) => (
          <a
            key={id}
            className={`px-2 py-1 text-white hover:bg-teal-600 transition-colors rounded-lg duration-200 ${id === activeId ? "text-blue-500 font-bold" : "text-black"}`}
            href={`#${id}`}
          >
            {id}
          </a>
        ))}
      </nav>
  );
};

export default ScrollspyNav;
