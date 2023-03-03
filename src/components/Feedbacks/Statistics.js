
import PropTypes from 'prop-types'
import { useState } from "react"


export const Statistics = ({ good, neutral, bad, positive, total }) => {
    return (<div >
        <p>
            Good: {good}
        </p>
        <p>
            Neutral: {neutral}
        </p>
        <p>
            Bad:   {bad}
        </p>
        <p>
            Total:   {total}
        </p>
        <p>
            Positive Feedback:  {positive}%
        </p>
    </div >
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number,
};