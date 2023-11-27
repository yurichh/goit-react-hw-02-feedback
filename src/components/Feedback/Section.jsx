import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section className="feedback-section-wrapper">
      <h1 className="feedback-title">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
