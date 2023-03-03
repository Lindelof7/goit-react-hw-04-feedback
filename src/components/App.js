import { Statistics } from "./Feedbacks/Statistics";
import { FeedbackOptions } from "./Feedbacks/FeedbackOptions";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Section } from "./Feedbacks/Section";
import { Notification } from './Feedbacks/Notification'
import css from './Feedbacks/Feedback.module.css'
import { useState } from "react";

export const App = () => {

  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);

  function onLeaveFeedback(evt) {
    switch (evt.target.name) {
      case 'Good':
        return setGood(Good + 1);

      case 'Neutral':
        return setNeutral(Neutral + 1);

      case 'Bad':
        return setBad(Bad + 1);

      default:
        return null
    }
  };

  const countTotalFeedback = () => {
    return Good + Neutral + Bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((Good / (Good + Neutral + Bad)) * 100)
  }

  const total = countTotalFeedback();

  return (
    <div className={(css.appWrap)}>
      <Section title='Please leave feedback' />
      <FeedbackOptions
        options={Object.keys({ Good, Neutral, Bad })}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Section title='Statistics' />
      {total === 0 ? (<Notification message='There is no feedback' />) : (< Statistics
        good={Good}
        neutral={Neutral}
        bad={Bad}
        total={countTotalFeedback()}
        positive={countPositiveFeedbackPercentage()}
      />)}
    </div>
  );
};


App.propTypes = {
  Good: PropTypes.number,
  Neutral: PropTypes.number,
  Bad: PropTypes.number,
};
