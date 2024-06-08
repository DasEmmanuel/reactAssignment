import './index.css'

const PostItem = props => {
  const {postDetails} = props
  const {title, body} = postDetails

  return (
    <li className="postItemCtn">
      <h1>{title}</h1>
      <p>{body}</p>
    </li>
  )
}

export default PostItem
