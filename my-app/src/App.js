import React, { Component } from 'react';
import './App.css';

import FeedbackOptions from './components/FeedbackOption/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
 state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (e) => {
    const {name} = e.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }))
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFbPercent = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback())
  }
  render() {
    return (
      <>
      <Section title={'Please leave your feedback'}>
      <FeedbackOptions options={this.state} onFeedbackLeave={this.feedbackLeave}
      /> 
      </Section>

      
      {this.countTotalFeedback() === 0 ? (
        <Section title={'Statistics'}>
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback}
        positiveFb={this.countPositiveFbPercent}
        />
        </Section>
      ) : (
        <Notification message='No feedback left'></Notification>
      )}
        </>
    )
  }
}

export default App;
