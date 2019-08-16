
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name:'Talk to dave', description:'He can help'},
        {name:'Burn it down', description:'watch it turn to ashes'},
        {name:'Finish the Sprint', description:'get the nessassary tools'},
        {name:'Mine', description:'You know what to do'},
      ]);
    });
};
