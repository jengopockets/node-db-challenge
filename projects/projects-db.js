const db = require('../data/db-config.js');
module.exports = {
    getProjects,
    getResources,
    getAllResources,
    getTasks,
    addProject,
    addResource,
    addTask
};

function getProjects() {
    return db('projects')
}
function getResources(project_id) {
    return db('project_resources as pr')
    .innerJoin('projects as p', 'pr.project_id', '=', 'p.id' )
    .innerJoin('resources as r', 'pr.resource_id', '=', 'r.id')
    .select('r.name', 'r.description')
    .where({project_id})
}
function getAllResources(){
    return db('resources')
}
function getTasks(project_id) {
    return db('tasks as t')
    .innerJoin('projects as p', 't.project_id', '=', 'p.id')
    .select('p.name', 't.description', 't.notes', 't.completed')
    .where({project_id})
}
function addProject(project) {
    return db('projects').insert(project);
}
function addResource(resource) {
    return db('resources').insert(resource);
}
function addTask(tasks) {
    return db('tasks').insert(tasks)
}