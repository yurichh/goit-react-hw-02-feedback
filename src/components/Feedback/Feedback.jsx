import { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
export class Feedback extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  statIncrement = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, currentValue) => acc + currentValue);
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return (this.state.Good / this.countTotalFeedback()) * 100;
    }
  };
  render() {
    const currentValues = Object.keys(this.state);
    return (
      <div className="feedback-wrapper">
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={currentValues}
            onLeaveFeedback={this.statIncrement}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback before" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
