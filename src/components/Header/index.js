import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import './index.css'

const Header = props => {
  const {onToggleMenu} = props

  const onClickMenu = () => {
    onToggleMenu()
  }

  return (
    <nav className="header_Ctn">
      <Link to="/posts">
        <img
          className="CommentsLogo"
          src="https://i.ibb.co/Q6gK9g8/comment-message-inbox-shape-social-media-notification-icon-speech-bubbles-3d-cartoon-banner-website.png"
          alt="Comments Logo"
        />
      </Link>
      <ul className="navItemsCtn">
        <Link to="/posts" className="linkItem">
          <li className="navItem">Posts</li>
        </Link>
        <Link to="/" className="linkItem">
          <li className="navItem">Comments</li>
        </Link>
      </ul>
      <div className="menuIconCtn">
        <MenuIcon
          fontSize="medium"
          className="menuIcon"
          onClick={onClickMenu}
        />
      </div>
    </nav>
  )
}

export default Header
