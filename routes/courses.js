const express = require('express')
const router=express.Router();


const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]
router.get('/', (req, res) => {
    res.send(courses);
});
router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given id was not found');
    res.send(course);
});

router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
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
router.delete("/:id", (req, res) => {
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

module.exports=router;