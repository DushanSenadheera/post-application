import { useState } from "react";
import {StyledModal} from '../../styledComponent' 
import styles from './Post.module.scss'
import CommentPost from "../CommentPost/CommentPost";

const Post = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const totalComments = props.comments ? props.comments.length : 0;

  return (
      <div className={styles.post}>
        <h3 style={{color: props.color}} onClick={handleOpen}>{props.title}</h3>
        <p>{props.description}</p>
        <small className={styles.commentSection} >{totalComments} Comments</small>
        <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CommentPost 
        title={props.title} 
        description={props.description} 
        comments={props.comments}
        titleColor={props.color}
      />
      </StyledModal>
      </div>
  )
}

export default Post
