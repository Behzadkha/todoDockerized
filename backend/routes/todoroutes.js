const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = express.Router();
todoRoutes.use(bodyParser.json());
let Todo = require('../todo.model');
//this is just a slash becasue you can mount this in /dishes in index.js
todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if(err){
            console.log(err);
        }
        else{
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get((req,res) => {
    let id = req.params.id;
    Todo.findById(id, (err, todos) => {
        res.json(todos);
    });
});

todoRoutes.route('/add').post(function(req,res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/update/:id').post((req,res) => {
    Todo.findById(req.params.id, (err, todos) => {
        if(!todo){
            res.status(404).send('data is not found');
        }
        else{
            todos.todo_description = req.body.todo_description;
            todos.todo_responsible = req.body.todo_responsible;
            todos.todo_priority = req.body.todo_priority;
            todos.todo_completed = req.body.todo_completed;

            todos.save().then(todos => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send("Update failed")
            });
        }
    });
});
module.exports =todoRoutes;
https://www.youtube.com/watch?v=WT67-OETeGU