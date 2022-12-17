import { Box, Button } from "@mui/material"

const Posts = (props) => {

  return (
    props.allPosts.map(x=>{
      return (
      <Box backgroundColor="white" marginBottom="20px" padding="5px 20px 10px 20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2>{x.title}</h2>
          <Button variant="contained" size="small" sx={{height:"30px"}}>Delete</Button>
        </Box>

        <p>{x.content}</p>
      </Box>
    )
    })
  )
}

export default Posts