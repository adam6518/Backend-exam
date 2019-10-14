const db = require('../database')

module.exports = {
    getMovies: (req, res) => {
        let sql = `select * from movies`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
                console.log(result);

            } catch (err) {
                console.log(err);

            }
        })
    },

    getCategories: (req, res) => {
        let sql = `select * from categories`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
            console.log(result);

        })
    },

    addMovieList: (req, res) => {
        let sql = `insert into movies values (0, '${req.body.namaFilm}', '${req.body.tahun}', '${req.body.description}')`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Movie list updated')
            console.log(result);

        })
    },

    addCategoryList: (req, res) => {
        let sql = `insert into categories values (0, '${req.body.nama}')`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Category list updated')
            console.log(result);

        })
    },

    editMovies: (req, res) => {
        let sql = `update movies set namaFilm, tahun, description = '${req.body.namaFilm}', '${req.body.tahun}', '${req.body.description}' where id = '${req.body.id}'`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Success')
        })
    },

    editCategory: (req, res) => {
        let sql = `update categories set nama = '${req.body.nama}' where id = '${req.body.id}'`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Success')
        })
    },

    deleteMovie: (req, res) => {
        var id = req.params.bebas
        db.query(`delete from movies where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }
}