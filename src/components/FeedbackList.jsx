import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import { useRecoilState } from "recoil";
import { centerState } from "../atom/CenterAtom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useRecoilState(centerState);
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await axios.get(`/feedback?_sort=id&_order=desc`);
    const data = response.data;
    setFeedback(data);
    setIsLoading(false);
  };

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feed back Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
