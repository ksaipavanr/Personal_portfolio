import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBriefcase, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';
import Resume from "./Resume";

function Timeline() {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = () => {
    setShowResume(true);
  };
  return (
    <div id="history">
      {showResume ? (
        <Resume />
      ):(
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">SSC</h3>
            <h4 className="vertical-timeline-element-subtitle">Sai Siddhartha High School</h4>
            <p>
              
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate</h3>
            <h4 className="vertical-timeline-element-subtitle">Narayana Junior College</h4>
            <p>
              MPC
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">Malla Reddy University</h4>
            <p>
              Computer Science Engineering In Artificial Intelligence and Machine Learning
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">BizCloudExperts, Hyderabad</h4>
            <p>
              AWS (S3 lambda EC2 RDS Dynamodb)
              React - nodejs
              Python
              Terraform
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className="button-container">
          <button className="timeline-button" onClick={handleResumeClick}>
            Resume <FontAwesomeIcon icon={faFilePdf} />
          </button>
        </div>
      </div>
      )}
    </div>
  );
}

export default Timeline;