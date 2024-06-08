import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Posts'
import CommentsDashBoard from './components/CommentsDashBoard'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<CommentsDashBoard />} />
      <Route exact path="/posts" element={<Home />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
