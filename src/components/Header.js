import { useEffect, useRef, useState } from "react";
import burgerIcon from "../assets/icons/icon-burger.svg";
import closeIcon from "../assets/icons/icon-close.svg";
import downloadIcon from "../assets/icons/icon-download.svg";
import githubIcon from "../assets/icons/icon-github.svg";

export default function Header({ sidebarRef }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const btnBurgerRef = useRef();

  const handleResize = () => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    if (!mobile) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    }
  };

  const closeMenuAfterClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const btnBurger = btnBurgerRef.current;

    if (sidebar && btnBurger) {
      if (menuOpen) {
        sidebar.classList.add("open");
        btnBurger.classList.add("open");
      } else {
        sidebar.classList.remove("open");
        btnBurger.classList.remove("open");
      }
    }

    const navLinks = document.querySelectorAll(".nav-btn");
    navLinks.forEach((link) =>
      link.addEventListener("click", closeMenuAfterClick)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", closeMenuAfterClick)
      );
    };
  }, [menuOpen, isMobile]);

  return (
    <header className="flex justify-end p-10 gap-10">
      <a className="btn btn-download flex gap-3" href="#">
        <img src={downloadIcon} alt="Télécharger" />
        <span className="btn-span hide-on-mobile">Télécharger</span>
      </a>

      <a className="btn btn-primary flex gap-3" href="#">
        <img src={githubIcon} alt="GitHub" />
        <span className="btn-span hide-on-mobile">GitHub</span>
      </a>

      <button
        className="burger-menu hidden"
        id="btnBurger"
        ref={btnBurgerRef}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <img className="burger-icon" src={burgerIcon} alt="Menu" />
        <img className="close-icon" src={closeIcon} alt="Fermer" />
      </button>
    </header>
  );
}
