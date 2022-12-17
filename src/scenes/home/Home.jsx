import { Button, Typography, Box, Card } from "@mui/material"
import { useEffect, useState } from "react"

const Home = () => {

  const [quote, setQuote] = useState({})
  const [weather, setWeather]= useState({})

  const fetchData = async () => {
    const quoteIndex = Math.floor(Math.random() * 100)
    const response = await fetch('https://type.fit/api/quotes')
    const data = await response.json()
    setQuote(data[quoteIndex])
  }

  const fetchWeather = async () => {
    const key = {ADDKEY}
    const url = "https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=" + key
    const response = await fetch(url)
    const data = await response.json()
    
    const weatherResponse = data

    setWeather(weatherResponse)
  }

  useEffect( () => {
    fetchData()
    fetchWeather()
    console.log(weather)
  }, [])
 



  return(
    <div>
      <Box >

        <Box padding= "20px" backgroundColor= "white" borderRadius="20px">
          <Typography sx={{fontWeight: "bold"}} variant="h6">
            Random Motivational Quote:
          </Typography>
          <br />
          <Typography variant="h4">
            <i>{quote.text}</i>
          </Typography>
          <Typography>
            - {quote.author ? quote.author : "Unknown"}
          </Typography>
        </Box>
        <br />
        {/* <Box padding= "20px" backgroundColor= "white" borderRadius="20px" >
          <Typography sx={{fontWeight: "bold"}} variant="h6">
            Current Weather in {weather.name} 
          </Typography>
          <Typography variant="h6">
            Temperature: {weather.main.temp} F
          </Typography>
          <Typography>
            Feels Like: {weather.main.feels_like} F
          </Typography>
          <Typography>
            Min: {weather.main.temp_min} F
          </Typography>
          <Typography>
            Max: {weather.main.temp_max} F
          </Typography>
          <Typography>
            Conditions: {weather.weather[0].description}
          </Typography>
        </Box> */}
    

      </Box>

    </div>

  )
}
export default Home