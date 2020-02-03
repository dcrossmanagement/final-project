if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
const axios = require("axios")

app.get('/api/characters', async (request, response) => {
  let results = await fetchResults('https://rickandmortyapi.com/api/character', [])
  response.json(results)
})

app.get('/api/characters/:id', (request, response) => {
  let url = `https://rickandmortyapi.com/api/character/${request.params.id}`
  try {
      axios.get(url).then(result => {
      response.json(result.data)
    })
  }
  catch(error) {
    console.log(error)
  }
})

app.get('/api/locations', async (request, response) => {
  let results = await fetchResults('https://rickandmortyapi.com/api/location/', [])
  response.json(results)
})

fetchResults = async(url, results) => {
  try {
    let response = await axios.get(url)
    results = [...results, ...response.data.results]
    if(response.data.info.next) {
      return await fetchResults(response.data.info.next, results)
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
