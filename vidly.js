const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json())

const genres=[
    {id:'1',name:"Thriller"},
    {id:'2',name:"Animations"},
    {id:'3',name:"Actions"}
]
//get all genres
app.get("/api/genres",(req,res)=>{
    res.send(genres)
})

//get a particular genres
app.get("/api/genres/:id",(req,res)=>{
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genres) {
        res.status(404).send('The course with the given id was not found');
    }
    res.send(genre)
})

//post
app.post('/api/genres', (req, res) => {
    const { error } = validateGenres(req.body);
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre)
});
//updating genres
app.put('/api/genres/:id', (req, res) => {
    //look up the course 
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) res.status(404).send('The genre with the given id was not found');

    const { error } = validateGenre(req.body);
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update genre
    genres.name = req.body.name;
    res.send(genre);
    //return the updated course

})

//de
app.delete("/api/genres/:id", (req, res) => {
    //look up the course
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        res.status(404).send('The genre with the given id was not found');
        return;
    }

    //Delete
    const index = genres.indexOf(genre)
    genres.splice(index, 1);
    res.send(genre)
})
//validate genres
function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    //validate
    //if invalid ,return 400 -Bad request
    return Joi.validate(genre, schema);
}
//PORTS
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ...`));