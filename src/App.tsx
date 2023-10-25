import "./App.css";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <div className="AppContainer">
          <Presentation />
        </div>
      </div>
    </>
  );
}

export default App;
