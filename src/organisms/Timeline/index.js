import React from 'react';
import styled from '@emotion/styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import data from './data';

const StyledTimeline = styled('div')`
  width: 100%;

  h2 {
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineItem = styled('div')`
  label: TimelineItem;
  margin: 0.5em 0;
  color: #fff;
  padding: 1em;
  background: #c30;
  line-height: 1.25em;

  &:last=child {
    margin-bottom: 0.2em;
  }

  h2 {
    text-align: left;
    color: #fff;
    font-size: 1.25em;
  }

  h3 {
    display: block;
    margin: 0.5em 0;
  }

  span.date {
    display: block;
    background: #fff;
    color: #c30;
    font-size: 1em;
    padding: 0.1em 0;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
  }

  p.desc {
    margin: 1em 0;
  }

  p.skills {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: 300;
  }
`;

library.add(faBriefcase);
library.add(faGraduationCap);

const icons = {
  work: <FontAwesomeIcon icon={faBriefcase} />,
  study: <FontAwesomeIcon icon={faGraduationCap} />,
};

const Timeline = (props) => {
  const { jobHunt } = props;

  return (
    <StyledTimeline>
      {jobHunt && (
      <div className="timeline-item">
        <span className="date">The Future</span>
        <h2>
              Your team?
        </h2>
        <h3>
              My technical and creative skills could bring real value to your project
        </h3>
      </div>
      )}
      {data.map((job) => {
        if (!jobHunt && job.hideIfNotHunting) return null;
        return (
          <a href={job.link} key={`${job.dates} + ${job.link}`}>
            <TimelineItem>
              <span className="date">
                {job.dates}
              </span>
              <h2>
                {job.companyName}
              </h2>
              <h3>
                <span className="icon">
                  {icons[job.icon]}
                </span>
                {job.jobTitle}
              </h3>
              <p className="desc">
                {job.jobDesc}
              </p>
              <p className="skills">
                {job.skills}
              </p>
            </TimelineItem>
          </a>
        );
      })}

    </StyledTimeline>
  );
};

export default Timeline;
