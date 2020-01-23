if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
const axios = require("axios")

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/characters', async (request, response) => {
  let results = await fetchCharacters('https://rickandmortyapi.com/api/character', [])
  response.json(results)
})

fetchCharacters = async(url, results) => {
  try {
    let response = await axios.get(url)
    results = [...results, ...response.data.results]
    if(response.data.info.next) {
      return await fetchCharacters(response.data.info.next, results)
    }
    else {
      return results
    }
  }
  catch(error) {
    console.log(error)
  }
}
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const port = process.env.PORT || 8080
app.listen(
  port,
  () => { console.log(`API listening on port ${port}...`) }
)
