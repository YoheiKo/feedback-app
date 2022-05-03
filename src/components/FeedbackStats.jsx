import React from "react";
import { roundToOne } from "../utils/util";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { centerState } from "../atom/CenterAtom";

function FeedbackStats() {
  const [feedback, setFeedback] = useRecoilState(centerState);
  //Calculate rating avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  //Make sure the number is one decimal points but remove 0
  average = roundToOne(average);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length}</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.protoTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rarting: PropTypes.number.isRequired,
  }),
};

export default FeedbackStats;
