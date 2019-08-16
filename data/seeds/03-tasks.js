
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description:'just go talk', notes:'do not be afraid', project_id:1},
        {description:'light it', notes:'use fire', project_id:2},
        {description:'watch it burn', notes:'do not be afraid', project_id:2},
        {description:'start sprint', notes:'go for it', project_id:3},
        {description:'finish sprint', notes:'you can do it', project_id:3},
        {description:'start minecraft', notes:'after you finish everything', project_id:4},
        {description:'mine till monday', notes:'no exeptions', project_id:4}
      ]);
    });
};
