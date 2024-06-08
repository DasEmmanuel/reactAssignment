import {Component} from 'react'
import {Link} from 'react-router-dom'
import {TailSpin} from 'react-loader-spinner'
import SearchIcon from '@mui/icons-material/Search'
import Header from '../Header'
import CommentItem from '../CommentItem'

import './index.css'

class CommentsDashBoard extends Component {
  state = {
    userCommentsList: [],
    searchInput: '',
    isLoading: true,
    showMenu: false,
  }

  componentDidMount() {
    this.getUserCommentsList()
  }

  getUserCommentsList = async () => {
    const userCommentsApiUrl = 'https://jsonplaceholder.typicode.com/comments'
    const response = await fetch(userCommentsApiUrl)
    const userCommentsData = await response.json()

    this.setState({userCommentsList: userCommentsData, isLoading: false})
  }

  getSearchResult = () => {
    const {searchInput, userCommentsList} = this.state
    const searchResults = userCommentsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return searchResults
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteComment = commentId => {
    const {userCommentsList} = this.state
    const filteredList = userCommentsList.filter(
      eachItem => eachItem.id !== commentId,
    )

    this.setState({userCommentsList: filteredList})
  }

  onToggleMenu = () => {
    const {showMenu} = this.state
    this.setState({showMenu: !showMenu})
  }

  render() {
    const {searchInput, isLoading, showMenu} = this.state
    console.log(showMenu)
    const searchResults = this.getSearchResult()
    return (
      <>
        <Header onToggleMenu={this.onToggleMenu} />
        {isLoading ? (
          <div className="loaderCtn">
            <TailSpin color="#240750" />
          </div>
        ) : (
          <div className="comments_dashBoard_ctn">
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
            <h1 className="main_heading">Comments</h1>
            <div className="searchInput_Ctn">
              <input
                className="searchInput"
                type="search"
                value={searchInput}
                onChange={this.onChangeInput}
                placeholder="Search for Comments"
              />
              <div className="searchIconCtn">
                <SearchIcon className="searchIcon" />
              </div>
            </div>

            <ul className="comments_ctn">
              {searchResults.length > 0 ? (
                searchResults.map(eachItem => (
                  <CommentItem
                    key={eachItem.id}
                    onDeleteComment={this.deleteComment}
                    commentDetails={eachItem}
                  />
                ))
              ) : (
                <h1>No Comments Found</h1>
              )}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default CommentsDashBoard
