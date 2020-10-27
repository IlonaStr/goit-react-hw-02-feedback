import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFb}) => {
    return (
        <>
        <ul>
            <li>Good - {good}</li>
            <li>Neutral - {neutral}</li>
            <li>Bad - {bad}</li>
            <li>Total - {total()}</li>
            {good > 0 && <li>Positive feedback - {positiveFb()}%</li>}
        </ul>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    positiveFb: PropTypes.string.isRequired,
};

export default Statistics;