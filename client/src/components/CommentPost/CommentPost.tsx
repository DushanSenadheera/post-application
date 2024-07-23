import { useState, useEffect } from "react";
import Post from "../Post/Post";
import axios from "axios";
import styles from "./CommentPost.module.scss";

const CommentPost = ({ title, description, comments, titleColor }) => {
  const [comment, setComment] = useState();
  const [selectedPost, setPost] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:5000/getPostById", { title: title })
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(`${err}`);
      });
  }, []);

  const handleCommentSubmit = () => {
    axios
      .post("http://localhost:5000/addComment", {
        title: title,
        commentText: comment,
      })
      .then((res) => {
        console.log(res.data);
        setComment(res.data);
        alert("Comment added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert(`${err}`);
      });
  };

  return (
    <div className={styles.commentPost}>
      <Post
        color={titleColor}
        title={title}
        description={description}
        comments={comments}
      />
      <div className="comments">
        {
          selectedPost?.comments?.map((commentItem, index) => (
            <p key={index}>{commentItem}</p>
          ))
        }
      </div>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        placeholder="New Comment Text"
      />
      <button onClick={handleCommentSubmit} className="primary-btn">
        Comment
      </button>
    </div>
  );
};

export default CommentPost;
