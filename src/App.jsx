import "./App.css";
import Lines from "./components/Lines/Lines";
import Resources from "./components/Resources/Resources";
import TgPreview from "./components/TgPreview/TgPreview";
import About from "./components/About/About";

function App() {
  return (
      <main>
          <div className="about-and-telegram">
              <About/>
              <TgPreview/>
          </div>
          <Lines/>
          <Resources/>
          <footer className="footer">
              <a href="https://github.com/dev-sr-nau/sr-nau-website" target="_blank" rel="noopener noreferrer">
                  View Source on GitHub
              </a>
          </footer>
      </main>
  );
}

export default App;
