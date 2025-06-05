# Backend - Simple Task Manager (completed)
kuraztech internship challenge



# Task Management API

A simple RESTful API for managing tasks built with Express.js.

## Features

- Create new tasks
- Get all tasks
- Update existing tasks
- Delete tasks
- Data persistence using JSON file storage

## Prerequisites

- Node.js 
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sudeisf/backend.git
cd /backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `data` directory in the project root:
```bash
mkdir data
```

## Running the Application

Start the server:
```bash
nodemon server.js
```

The server will start running on `http://localhost:5000`

## API Endpoints

### Get All Tasks
- **GET** `/api/tasks`
- Returns a list of all tasks

### Create New Task
- **POST** `/api/tasks`
- Request body: `{ "title": "Your task title" }`
- Creates a new task with the provided title

### Update Task
- **PUT** `/api/tasks/:id`
- Updates an existing task by ID
- Request body can include: `{ "title": "New title", "completed": true/false }`

### Delete Task
- **DELETE** `/api/tasks/:id`
- Deletes a task by ID

## Data Storage

Tasks are stored in a JSON file located at `data/tasks.json`. The file is automatically created when the first task is added.

## Project Structure

```
├── server.js          # Main application file
├── views/            # EJS templates
├── data/             # Data storage directory
│   └── tasks.json    # Tasks data file
└── README.md         # This file
```

