import { Routes, Route } from "react-router-dom";
import Home from "./scenes/home/Home"
import Posts from "./scenes/posts/Posts"
import NewPost from "./scenes/newpost/NewPost"

import SideNav from "./scenes/global/SideNav";
import { useState } from "react";

function App() {

  const [allPosts, setAllPosts] = useState([])

  const handleNewPost = newPost => {
    setAllPosts(prevValue => {
      return([
        ...prevValue,
        newPost
      ])
    })
  }


  return (
    <div className="app">
      <SideNav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/posts" element={<Posts allPosts={allPosts}/>} />
          <Route path="/newpost" element={<NewPost handleNewPost={handleNewPost}/>} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
