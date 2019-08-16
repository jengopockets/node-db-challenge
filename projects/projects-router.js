const express = require('express');
const data = require('./projects-db.js');
const router = express.Router();

router.get('/', (req,res) => {
    data.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({message:'Error gettin projects'})
        })
})

router.post('/', (req,res) => {
    const projectData = req.body;
    data.addProject(projectData)
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message:'Error adding projects'})
    })
    
})
router.get('/:project_id/resources', (req,res) => {
    const { project_id } = req.params
    data.getResources(project_id)
    .then(resources => {
        res.status(200).json(resources);
    }) 
    .catch(err => {
        res.status(500).json({message:'Error gettin resources'})
    })   
})
router.get('/resources', (req,res) => {
    data.getAllResources()
    .then(resources => {
        res.status(200).json(resources);
    }) 
    .catch(err => {
        res.status(500).json({message:'Error gettin resources'})
    })   
})
router.post('/resources', (req,res) => {
    const resourceData = req.body;
    data.addResource(resourceData)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({message:'Error adding resources'})
    })    
})
router.get('/:project_id/tasks', (req,res) => {
    const { project_id } = req.params
    data.getTasks(project_id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({message:'Error gettin tasks'})
    })
})
router.post('/tasks', (req,res) => {
    const taskData = req.body;
    data.addTask(taskData)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({message:'Error adding tasks'})
    })  
    
})

module.exports = router;