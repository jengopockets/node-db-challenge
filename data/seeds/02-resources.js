
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name:'dave', description:'the one the only'},
        {name:'pickaxe', description:'mine all day'},
        {name:'shovel', description:'hit em on the head with it'},
        {name:'fire', description:'lit'},
      ]);
    });
};
