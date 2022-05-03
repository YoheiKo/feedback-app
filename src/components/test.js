import { Navigate } from "react-router-dom";

function Post() {
  const status = 404;

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return <div>Post</div>;
}

export default Post;
