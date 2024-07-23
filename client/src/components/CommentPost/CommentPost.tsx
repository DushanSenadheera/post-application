import { useState, useEffect } from "react"
import Post from "../Post/Post"
import axios from "axios"
import styles from './CommentPost.module.scss'

const CommentPost = ({ title, description, comments, titleColor }) => {

  const [comment, setComment] = useState()
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

  const handleCommentSubmit = () => {
    axios.post("http://localhost:5000/addComment", {
      postTitle: post.title,
      comment: comment
    })
      .then((res) => {
        console.log(res.data)
        setComment(res.data)
      })
      .catch((err) => {
        console.log(err)
        alert(`${err}`)
      })
  }

  return (
    <div className={styles.commentPost}>
      <Post color={titleColor} title={title} description={description} comments={comments}/>
      <div className="comments">
        {/* {comments.map((comment) => {
          return <p>{comment}</p>
        })} */}
        <p>Comments</p>
      </div>
      <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" placeholder="New Comment Text" />
      <button onClick={handleCommentSubmit} className="primary-btn">Comment</button>
    </div>
  )
}

export default CommentPost
