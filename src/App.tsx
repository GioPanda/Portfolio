import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import OtherPage from "./Components/OtherPage";
import Presentation from "./Components/Presentation";
import SideBar from "./Components/SideBar";

import SkillsGallery from "./Components/SkillsGallery";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 730px)").matches;
    setIsMenuOpen(mediaQuery);
    console.log(isMenuOpen);
  }, [isMenuOpen]);

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
        </div>
      </div>
    </>
  );
}

export default App;
