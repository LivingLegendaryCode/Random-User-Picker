// Jarrell Warren — Random User Picker
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';

// Create an Express application
const app = express();
const port = process.env.PORT || 8080;

// Set the views directory and view engine
app.set("views", path.resolve(process.cwd(), "views"));


// Serve static files from the "public" directory
app.use(express.static(path.resolve(process.cwd(), "public")));

// Route for serving the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'public', 'index.html'));
});

// API endpoint to fetch random users
app.get('/random_users', async (req, res) => {
    try {
        const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!apiResponse.ok) throw new Error('User service unavailable');
        const users = await apiResponse.json(); // read JSON
        const randomUsers = getRandomUsers(users, 3);// 3 random users
        const sortedRandomUsers = randomUsers.sort((a, b) => a.name.localeCompare(b.name)); // sort name
        res.json(sortedRandomUsers); // Return JSON response
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

function getRandomUsers(users, count) {
    const shuffled = [...users]; // Create a copy

    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
}

// Start server and open 
app.listen(port, () => {
    console.log(`Application started and listening at http://localhost:${port}`);

});