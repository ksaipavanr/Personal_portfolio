import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import Loader from './components/Loader/loader';  // Direct import
import FadeIn from './components/FadeIn';
import './index.scss';
import Gallery from "./components/Gallery/Gallery";
import Resume from "./components/Resume";

function App() {
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }
    const App: React.FC = () => {
        return (
          <div>
            <Resume />
          </div>
        );  
      };

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                    <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                    <FadeIn transitionDuration={700}>
                        <Main/>
                        <Expertise/>
                        <Timeline/>
                        <Project/>
                        <Gallery/>
                        <Contact/>
                    </FadeIn>
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;