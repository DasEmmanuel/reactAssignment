import {Component} from 'react'
import {Link} from 'react-router-dom'
import {TailSpin} from 'react-loader-spinner'
import Header from '../Header'
import PostItem from '../PostItem'

import './index.css'

class Home extends Component {
  state = {userPostList: [], isLoading: true, showMenu: false}

  componentDidMount() {
    this.getPostData()
  }

  getPostData = async () => {
    const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(postsApiUrl)
    const userCommentsData = await response.json()

    this.setState({userPostList: userCommentsData, isLoading: false})
  }

  onToggleMenu = () => {
    const {showMenu} = this.state
    this.setState({showMenu: !showMenu})
  }

  render() {
    const {userPostList, isLoading, showMenu} = this.state
    return (
      <>
        <Header onToggleMenu={this.onToggleMenu} />
        {isLoading ? (
          <div className="loaderCtn">
            <TailSpin color="#240750" />
          </div>
        ) : (
          <div className="posts_dashBoard_ctn">
            {showMenu ? (
              <ul className="menuCtn">
                <Link to="/posts" className="menulinkItem">
                  <li className="menuItem">Posts</li>
                </Link>
                <hr className="menuLine" />
                <Link to="/" className="menulinkItem">
                  <li className="menuItem">Comments</li>
                </Link>
                <hr className="menuLine" />
              </ul>
            ) : null}
            <h1 className="main_heading">Posts</h1>
            <ul className="posts_ctn">
              {userPostList.map(eachItem => (
                <PostItem key={eachItem.id} postDetails={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
