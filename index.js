const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.use(cors());
app.get('/', (req, res) => {
    res.send('Proacademy');
});


app.get('/courses-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === "7") {
        res.send(courses);
    }
    else {
        const course = courses.filter(n => n.id === id);
        res.send(course);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    const selectedCourses = courses.find(n => n.id === id);
    res.send(selectedCourses);
});

app.listen(port, () => {
    console.log('prpro', port);
})
