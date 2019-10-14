let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')

const port = 5000
const {
    getMovies,
    getCategories,
    addMovieList,
    addCategoryList,
    editMovies,
    editCategory,
    deleteMovie
} = require('./1.Controllers/authController')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Ini Home Page')
})

app.get('/getmovielist', getMovies)

app.get('/getcategorylist', getCategories)

app.post('/addmovie', addMovieList)

app.post('/addcategory', addCategoryList)

app.put('/editmovie', editMovies)

app.put('/editcategory', editCategory)

app.delete('/deletemovie', deleteMovie)

app.listen(port, console.log('Running in port : ' + port))