import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="feedback-btn-list">
      {options.map(option => (
        <li key={option} className="feedback-btn-item">
          <button
            className="feedback-btn"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
