import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../assets/styles/Resume.scss';
import { useState } from 'react';
import Timeline from './Timeline';
import { faArrowLeft, faBackspace } from '@fortawesome/free-solid-svg-icons';

const ResumeViewer: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [showTimeline, setShowTimeline] = useState(false);
  
    const handleResumeClick = () => {
        setShowTimeline(true);
    };

  return (
    <div id="history">
          {showTimeline ? (
            <Timeline />
          ):(
    <div className="resume-container">
      <div className="resume-header">
        <h1>My Professional Resume</h1>
        <p>View or download my complete professional experience and qualifications</p>
      </div>

    <div className="resume-viewer">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={process.env.PUBLIC_URL + "/Kyasaram_Sai_Pavan_Reddy.pdf"}
                  plugins={[defaultLayoutPluginInstance]}
                />

      </Worker>
    </div>
    <div className="button-container">
                <button className="timeline-button" onClick={handleResumeClick}>
                  Back <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </div>
    </div>
        )}
 </div>
  );
};

export default ResumeViewer;