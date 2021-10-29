const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

let Todos = require('../sample.json');

router.get('/', (req, res) => {
    res.json(Todos);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const todo = Todos.find(todo => todo.id == id)
    res.json(todo)
});

router.post('/', (req, res) => {
    const id = Todos.length + 1;
    const { title, description, completed } = req.body;
    const newtodos = { ...req.body, id };
    if (id && title && description && completed != null) {
        Todos.push(newtodos);
        res.json(Todos);
    }
    else {
        res.status(500).json({ error: 'There was an error.' });
    }
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    if (id && title && description && completed != null) {
        Todos = Todos.map(todo => (todo.id == id) ? { id, title, description, completed } : todo)
        res.json(Todos);
    } else {
        res.status(500).json({ error: 'There was an error.' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        Todos = Todos.filter(todo => todo.id != id);
        res.json(Todos);
    }
    else {
        res.status(500).json({ error: 'There was an error.' });
    }
});

module.exports = router;