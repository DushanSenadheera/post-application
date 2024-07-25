import { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./Home.module.scss";
import Post from "../../components/Post/Post";
import Modal from "@mui/material/Modal";
import CreatePost from "../../components/CreatePost/CreatePost";

const Home = () => {
  
  const [post, setPost] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get("http://localhost:5000/getAllPosts")
      .then((res) => {
        console.log(res.data);
        setPost(res.data.Posts);
      })
      .catch((err) => {
        console.log(err);
        alert(`${err}`);
      });
  }, []);

  return (
    <div className={Styles.home}>
      <button className="primary-btn" onClick={handleOpen}>
        Create New Post
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreatePost />
      </Modal>
      {post?.map((postItem) => {
        return (
          <Post
            title={postItem.title}
            description={postItem.description}
            color={postItem.titleColor}
            comments={postItem.comments}
          />
        );
      })}
    </div>
  );
};

export default Home;
