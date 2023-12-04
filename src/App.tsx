import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import OtherPage from "./Components/OtherPage";
import Presentation from "./Components/Presentation";
import SideBar from "./Components/SideBar";

import SkillsGallery from "./Components/SkillsGallery";
import ProjectsGallery from "./Components/ProjectsGallery";
import ContactsLinks from "./Components/ContactsLinks";
import Footer from "./Components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleResize = () => {
    setIsMenuOpen(window.innerWidth < 760);
  };

  useEffect(() => {
    // Define o estado inicial
    handleResize();
    // Adiciona o listener
    window.addEventListener("resize", handleResize);
    // Limpa o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="App">
        <Header isOpen={isMenuOpen} />
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="pages">
          <Presentation isOpen={isMenuOpen} />
          <OtherPage />
          <SkillsGallery />
          <ProjectsGallery />
          <ContactsLinks />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
