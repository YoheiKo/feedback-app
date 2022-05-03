import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useRecoilState } from "recoil";
import { centerState, editState } from "../atom/CenterAtom";
import FeedbackItem from "./FeedbackItem";

function FeedbackForm() {
  const [feedback, setFeedback] = useRecoilState(centerState);
  const [feedbackedit, setFeedbackEdit] = useRecoilState(editState);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  useEffect(() => {
    if (feedbackedit.edit) {
      setBtnDisabled(false);
      setText(feedbackedit.item.text);
      setRating(feedbackedit.item.rating);
    }
  }, [feedbackedit]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    let input = e.target.value;
    if (input === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (input !== "" && input.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characteers");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackedit.edit) {
        updateFeedback(feedbackedit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
    }
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          select={(rating) => setRating(rating)}
          selected={rating}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
