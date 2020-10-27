import React from 'react';
import classes from './FeedbackOption.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, feedbackLeave }) => {
    const optionsArr = Object.keys(options);
    return (
        <>
        {optionsArr.map((option) => (
            <button className={classes.Button} name={option} key={option} onClick={feedbackLeave} type="button">
                {option}
            </button>
        ))}
        </>
    )
}
FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    feedbackLeave: PropTypes.func.isRequired,
};

export default FeedbackOptions;