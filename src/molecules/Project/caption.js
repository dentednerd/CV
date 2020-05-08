import React from 'react';

const Caption = ({ project }) => {
  return (
    <p style={{ textAlign: 'center', margin: '0 auto' }}>{project.caption}</p>
  );
};

export default Caption;
