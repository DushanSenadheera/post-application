import { useState } from "react";
import axios from "axios";
import styles from "./CreatePost.module.scss";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    titleColor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createPost", post)
      .then((res) => {
        console.log(res.data);
        alert("Post Created Succesfully!");
      })
      .catch((err) => {
        console.log(err);
        alert(`${err}`);
      });
  };

  return (
    <form className={styles.createPost}>
      <input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <div className="color">
        <p>Title Color</p>
        <button
        style={{ backgroundColor: "blue" }}
          type="button"
          onClick={() => setPost({ ...post, titleColor: "blue" })}
        >
          Blue
        </button>
        <button
        style={{ backgroundColor: "yellow" }}
          type="button"
          onClick={() => setPost({ ...post, titleColor: "yellow" })}
        >
          Yellow
        </button>
        <button
        style={{ backgroundColor: "red" }}
          type="button"
          onClick={() => setPost({ ...post, titleColor: "red" })}
        >
          Red
        </button>
      </div>
      <button onClick={handleSubmit} className="primary-btn">
        Publish
      </button>
    </form>
  );
};

export default CreatePost;
