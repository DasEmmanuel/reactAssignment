import DeleteIcon from '@mui/icons-material/Delete'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteComment} = props
  const {id, postId, name, email, body} = commentDetails

  const onClickDelete = () => {
    onDeleteComment(id)
  }

  return (
    <li className="commentItemCtn">
      <h1 className="postHeading">{`POST NO: ${postId}`}</h1>
      <div className="userInfoCtn">
        <AccountCircleIcon fontSize="large" />
        <p className="emailText">{email}</p>
      </div>
      <div className="commentBodyCtn">
        <p className="commentTitle">{name}</p>
        <p>{body}</p>
      </div>
      <DeleteIcon fontSize="medium" onClick={onClickDelete} />
    </li>
  )
}

export default CommentItem
