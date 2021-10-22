const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); //user of middleware
app.use(express.json());

const users = [
    { id: 0, name: 'Sucharita', email: 'sucharita@gmail.com', mobile: +91383635464 },
    { id: 1, name: 'Sumana', email: 'Sumana@gmail.com', mobile: +91383635464 },
    { id: 2, name: 'Rachana', email: 'Rachana@gmail.com', mobile: +91383635464 },
    { id: 3, name: 'Antu', email: 'antu@gmail.com', mobile: +91383635464 },
    { id: 4, name: 'Santu', email: 'santu@gmail.com', mobile: +91383635464 },
    { id: 5, name: 'Tanmay', email: 'tanmay@gmail.com', mobile: +91383635464 },
    { id: 6, name: 'Subrata', email: 'Subrata@gmail.com', mobile: +91383635464 },
    { id: 7, name: 'Laxman', email: 'laxman@gmail.com', mobile: +91383635464 },
]

app.get('/', (req, res) => {
    res.send("This is API");
})



app.get('/users', (req, res) => {
    const search = req.query.search;
    // console.log(req.query);
    if (search) {
        const searchUsers = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchUsers);
    } else {
        res.send(users);
    }

})

// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.params);
    const user = users[id];
    res.send(user);

})

// post
app.post('/users', (req, res) => {
    console.log('post hit', req.body);
    // res.send();
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})



app.listen(port, () => {
    console.log('listening to port', port);
})