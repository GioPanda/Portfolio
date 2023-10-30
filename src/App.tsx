import "./App.css";
import Header from "./Components/Header";
import OtherPage from "./Components/OtherPage";
import Presentation from "./Components/Presentation";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <div className="sidebar">
          <SideBar />
        </div>
        <div className="pages">
          <Presentation />
          <OtherPage />
        </div>
      </div>
    </>
  );
}

export default App;
