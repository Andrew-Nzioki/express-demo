const morgan=require('morgan')
const helmet=require('helmet')
const Joi = require('joi');
const logger=require('./logger')
const authentication=require('./authentication')
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(helmet());
app.use(morgan('tiny'))

app.use(logger);
app.use(authentication);

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]
const message = [
    'Hello world'
]
const lecturers = [
    { id: 1, name: 'andrew' }
]
app.get('/', (req, res) => {
    res.send(message[0])
});
app.get('/api/courses', (req, res) => {
    res.send(courses);
});
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given id was not found');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course)
});

//updating
app.put('/api/courses/:id', (req, res) => {
    //look up the course 
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given id was not found');

    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update course
    course.name = req.body.name;
    res.send(course);
    //return the updated course

})
//Delete route handling
app.delete("/api/courses/:id", (req, res) => {
    //look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with the given id was not found');
        return;
    }

    //Delete
    const index = courses.indexOf(course)
    courses.splice(index, 1);
    res.send(course)
})

//validate course
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    //validate
    //if invalid ,return 400 -Bad request
    return Joi.validate(course, schema);
}
//PORTS
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ...`));
