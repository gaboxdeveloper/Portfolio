import { useState, useEffect } from 'react';

const Header = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxOpacityScroll = 150; // Cambia este valor según tus necesidades

      // Calcula el nivel de opacidad basado en la posición de desplazamiento
      const newOpacity = Math.min(1, scrolled / maxOpacityScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="flex justify-center items-center py-5 mx-auto fixed top-0 left-0 w-full z-20"
      style={{
        backgroundColor: `rgba(5, 15, 50, ${opacity})`,
        boxShadow: opacity > 0 ? '0 4px 4px rgba(0, 0, 0, 0.5)' : 'none',
        height: opacity > 0 ? '4rem' : 'auto',
        transition: 'background-color 0.3s ease, height 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <nav className="flex flex-row gap-x-5 md:gap-x-20">
      <a
          className="hover:scale-110 transition"
          style={{ opacity: 1 }}
          href="/#"
        >
          Home
        </a>
        <a
          className="hover:scale-110 transition"
          style={{ opacity: 1 }}
          href="/#education"
        >
          Education
        </a>
        <a
          className="hover:scale-110 transition"
          style={{ opacity: 1 }}
          href="/#projects"
        >
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Header;
