const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Test data
let projects = [
    {
        id: 0,
        title: 'Backpocket',
        description: 'Online shopping website mainly build with Python and Django.',
        image: 'backpocket.png',
        tech: ['Python', 'Django'],
        url: 'https://floating-brook-26346-12d4fb64a603.herokuapp.com/'
    },
    {
        id: 1,
        title: 'Test Item 2',
        description: 'Test Item 2 Description',
        image: '',
        url: 'https://floating-brook-26346-12d4fb64a603.herokuapp.com/'
    },
    {
        id: 2,
        title: 'Test Item 3',
        description: 'Test Item 3 Description',
        image: '',
        url: 'https://floating-brook-26346-12d4fb64a603.herokuapp.com/'
    }
];

// Enable cors for all origins
app.use(cors());

// Serve files from public folder
app.use(express.static('public'));
/*app.get('/', (req, res) => {
    res.send(' Welcom to my projects API!');
});*/

// Get all projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})