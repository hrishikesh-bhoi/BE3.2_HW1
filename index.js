const express = require('express');
const app = express();

app.use(express.json());

const books = [ { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];

// 1. Write a GET route "/" which sends a message "Hello, Express server.". Test your API with Postman.
app.get('/', (req, res) => {
  res.send('Hello, Express Server!');
});

// 2. Write a POST route "/books" which sends a new book into the pre-defined books array.
app.post('/books', (req, res) => {
    const newBook = req.body;

    if(!newBook.title || !newBook.author || !newBook.year) {
        return res.status(400).json({ error: 'Please provide title, author, and year for the book.' });
    } else {
        books.push(newBook);
        res.status(201).json({ message: 'Book added successfully!', book: newBook });   
    }
});

// 3. Write a GET route "/books" which sends the books array in response. Test your API with Postman.
app.get('/books', (req, res) => {
    res.send(books);
});



// 4. Write a POST route "/todos" which sends a new todo into the pre-defined todos array.
const todos = [ { id: 1, title: 'Water the plants', day: 'Saturday' },];

app.post('/todos', (req, res) => {
    const newTodo = req.body; 
    
    if(!newTodo.title || !newTodo.day) {
        return res.status(400).json({ error: 'Please provide title and day for the todo.' });
    } else {
        todos.push(newTodo);
        res.status(201).json({ message: 'Todo added successfully!', todo: newTodo });
    }   
    
});

// 5. Write a GET route "/todos" which sends the todos array in response. Test your API with Postman.
app.get('/todos', (req, res) => {
    res.send(todos);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
