import { useState, useEffect } from "react"
import Post from "../Post/Post"
import axios from "axios"
import styles from './CommentPost.module.scss'

const CommentPost = ({ title, description, comments, titleColor }) => {

  const [post, setPost] = useState()

  useEffect(() => {
    axios.get("http://localhost:5000/getPostById", title)
      .then((res) => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
        alert(`${err}`)
      })
  }, [])

  return (
    <div className={styles.commentPost}>
      <Post color={titleColor} title={title} description={description} comments={comments}/>
      <div className="comments">
        <p>comments</p>
      </div>
      <input type="text" placeholder="New Comment Text" />
      <button className="primary-btn">Comment</button>
    </div>
  )
}

export default CommentPost
