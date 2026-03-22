const express = require('express')
const path = require('path')
const app = express()

const movies = [
  {
    // 2.
    "Title": "Interstellar",
    "Released": "07/11/2014",
    "Runtime": 169,
    "Genres": ["Adventure", "Drama", "Sci-Fi"],
    "Directors": ["Christopher Nolan"],
    "Writers": ["Jonathan Nolan", "Christopher Nolan"],
    "Actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    "Plot": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    // 1.
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 74,
    "imdbRating": 8.7
  },
  {
    "Title": "There Will Be Blood",
    "Released": "25/01/2008",
    "Runtime": 158,
    "Genres": ["Drama"],
    "Directors": ["Paul Thomas Anderson"],
    "Writers": ["Paul Thomas Anderson", "Upton Sinclair"],
    "Actors": ["Daniel Day-Lewis", "Paul Dano", "Ciarán Hinds"],
    "Plot": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg",
    "Metascore": 93,
    "imdbRating": 8.2
  },
  {
    "Title": "Whiplash",
    "Released": "15/10/2014",
    "Runtime": 106,
    "Genres": ["Drama", "Music"],
    "Directors": ["Damien Chazelle"],
    "Writers": ["Damien Chazelle"],
    "Actors": ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    "Plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 89,
    "imdbRating": 8.5
  }
]
// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  res.json(movies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

