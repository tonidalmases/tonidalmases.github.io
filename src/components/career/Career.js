import React from 'react';
import { makeStyles } from '@material-ui/core';
import ExperienceItem from '../shared/ExperienceItem';
import Section from '../shared/Section';
import { careerItems } from '../../data/career-items';

const useStyles = makeStyles({
  marginBottom: {
    paddingBottom: '2em',
  },
});

function Career() {
  const classes = useStyles();

  const renderExperiences = careerItems.map((experience, index) => (
    <ExperienceItem
      key={index}
      experience={experience}
      className={index < careerItems.length - 1 ? classes.marginBottom : ''}
    ></ExperienceItem>
  ));

  return (
    <Section id="career" title="Career">
      {renderExperiences}
    </Section>
  );
}

export default Career;
