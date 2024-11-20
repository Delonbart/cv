import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Cover from "./components/page/cover";
import About from "./components/page/about";
import Skills from "./components/page/skills";
import Eduacation from "./components/education";
import Contact from "./components/page/contact";
import Footer from "./components/page/Footer";

function App() {
  return (
    <div classname="App">
      <Header />
      <div className="page-content">
        <div className="container">
          <div className="cover shadow-lg bg-white">
            <Cover />
            <About />

            <Skills />

            <Eduacation />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
