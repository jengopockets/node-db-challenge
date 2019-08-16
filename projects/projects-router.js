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
    
})
router.get('/:project_id/resources', async (req,res) => {
    const { project_id } = req.params
    data.getResources(project_id)
    .then(resources => {
        res.status(200).json(resources);
    }) 
    .catch(err => {
        res.status(500).json({message:'Error gettin resources'})
    })   
})
router.post('/:id/resources', (req,res) => {
    
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
router.post('/:id/tasks', (req,res) => {
    
})

module.exports = router;