import './App.css';
import NavbarComponent from './components/NavbarComponent';
import NameComponent from './components/NameComponent';
import AboutComponent from './components/AboutComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ProjectsComponent from './components/ProjectsComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <NameComponent />
      <AboutComponent />
      <ExperienceComponent />
      <ProjectsComponent />
      <FooterComponent />
    </div>
  );
}

export default App;


