import { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statIncrement = name => {
    this.setState(prevState => {
      switch (name.option) {
        case 'Good':
          return {
            good: prevState.good + 1,
            neutral: prevState.neutral,
            bad: prevState.bad,
          };
        case 'Neutral':
          return {
            good: prevState.good,
            neutral: prevState.neutral + 1,
            bad: prevState.bad,
          };
        case 'Bad':
          return {
            good: prevState.good,
            neutral: prevState.neutral,
            bad: prevState.bad + 1,
          };
        default:
          break;
      }
    });
  };
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return (this.state.good / this.countTotalFeedback()) * 100;
    }
  };
  render() {
    return (
      <div className="feedback-wrapper">
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.statIncrement}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
