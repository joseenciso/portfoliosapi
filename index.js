const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Test data
let projects = [
    {
        id: 0,
        name: 'Backpocket',
        description: 'Online shopping website mainly build with Python and Django.',
        image: 'backpocket.png'
    },
    {
        id: 1,
        name: 'Test Item 2',
        description: 'Test Item 2 Description',
        image: ''
    },
    {
        id: 2,
        name: 'Test Item 3',
        description: 'Test Item 3 Description',
        image: ''
    }
];


app.use(express.json(),(req, res, next) => {
    res.header("Access-Controll-Allow-Origin", "*")
})
//app.use(express.json());

// Get all projects
app.get('/projects', (req, res) => {
    res.json(projects);
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})