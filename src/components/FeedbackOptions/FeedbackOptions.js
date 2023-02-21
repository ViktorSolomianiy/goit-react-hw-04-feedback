import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback__btn--list">
      {options.map(item => {
        return (
          <button
            onClick={() => onLeaveFeedback(item)}
            key={shortid.generate()}
            className="feedback__btn"
            type="button"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
