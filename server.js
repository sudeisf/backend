const { error } = require('console');
const express  = require('express');
const fs = require('fs');
const path = require('path');
const { title } = require('process');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
const DATA_PATH = path.join(__dirname,"data","tasks.json");

const readTasks = () => JSON.stringify(fs.readFileSync(DATA_PATH));
const writeTasks = (data) => fs.writeFileSync(DATA_PATH,JSON.stringify(data,null,2));

app.get('/',(req,res)=>{
    res.render('index',{message:"Api is runing"})
})

app.get('/api/tasks',(req,res)=>{
    const tasks = readTasks();
    if (!tasks) {
        res.status(200).json({message : "there is not tasks to show yet"})
    }
    res.json(tasks)
})
app.post('/api/tasks',(req,res)=>{
    const tasks = readTasks()
    const {title} = req.body;
    if(!title){
        res.status(400).json({error : "title is required"})
    }
    const newTask =  {
        id: tasks.length ? tasks[tasks.length -1].id : 1,
        title :  title,
        compeleted : false
    }
    tasks.push(newTask);
    writeTasks(newTask);
    res.status(201).json(newTask)
})

app.put('/api/tasks/:id',(req,res)=>{
    const tasks = readTasks();
    const {compeleted} = req.body;
    const index = tasks.findIndex((task)=>task.id === parseInt(req.params.id));
    if(index === -1 ) return res.status(400).json({message : "task not found"});
    tasks[index] ={...tasks[index], compeleted : compeleted}
    writeTasks(tasks);
    res.status(200).json(tasks[index]);
});

app.delete('/api/tasks/id',(req,res)=>{
    let tasks = readTasks();
    tasks = users.filter((task) => task.id !== parseInt(req.params.id));
    writeTasks(tasks);
    res.status(200).json({message : "Task deleted"});
})

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))