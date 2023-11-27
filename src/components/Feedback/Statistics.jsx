import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="feedback-stat-list">
      <li className="feedback-stat-item">
        <p className="feedback-stat-name">Good </p>
        <span className="feedback-stat-number">{good}</span>
      </li>
      <li className="feedback-stat-item">
        <p className="feedback-stat-name">Neutral </p>
        <span className="feedback-stat-number">{neutral}</span>
      </li>
      <li className="feedback-stat-item">
        <p className="feedback-stat-name">Bad</p>
        <span className="feedback-stat-number">{bad}</span>
      </li>
      <li className="feedback-stat-item">
        <p className="feedback-stat-name">Total</p>
        <span className="feedback-stat-number">{total}</span>
      </li>
      <li className="feedback-stat-item">
        <p className="feedback-stat-name">Positive feedback</p>
        <span className="feedback-stat-number">
          {positivePercentage.toFixed(0)}%
        </span>
      </li>
    </ul>
  );
};

export default Statistics;
