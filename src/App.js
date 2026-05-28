import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import WorkExperience from './components/WorkExperience';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <WorkExperience/>
      <Projects/>
      <Highlights/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
