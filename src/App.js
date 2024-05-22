import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectSection';
import WelcomeComponent from './components/WelcomeComponent';
import Navigation from './components/Navigation';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Navigation />
                <div id="home"><WelcomeComponent /></div>
                <div id="about"><AboutMe /></div>
                <div id="projects"><ProjectsSection /></div>
                <div id="contact"><Footer /></div>
            </div>
        </div>
    );
}

export default App;
