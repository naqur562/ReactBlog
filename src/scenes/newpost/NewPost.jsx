import { Box } from "@mui/system"
import { useState } from "react"
import {Button} from "@mui/material"

const NewPost = (props) => {

  const [post, setPost] = useState({
    title: "",
    content: ""
  })

  const handleChange = (e) => {
    setPost(prevValue => {

      const {name, value} = e.target

      return({
        ...prevValue,
        [name]: value
      })
    })
  }

  const handleClick = () => {
    props.handleNewPost(post)
    setPost({
      title: "",
      content: ""
    })

  }


  return(
    <Box>

      <h2>Type new post here!</h2>

      <Box display="flexbox">

        <h3>Post Title</h3>
        <input name="title" type="text" id="title" onChange={handleChange} value={post.title}/>

        <h3>Post Content</h3>
        <textarea name="content" cols="100" rows="20" onChange={handleChange} value={post.content}/> <br /> <br />

        <Button variant="contained" onClick={handleClick}>Submit</Button>
      
      </Box>

    </Box>

  )
}

export default NewPost