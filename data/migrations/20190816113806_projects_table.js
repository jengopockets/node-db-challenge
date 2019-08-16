
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl
              .string('name', 255)
              .notNullable()
              .unique();
            tbl
              .string('description', 4000)
            tbl
              .boolean('completed')
              .notNullable()
              .defaultTo(false)
        })
        .createTable('project_resources', tbl => {
            tbl.increments();
            tbl
              .integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE');
            tbl
              .integer('resource_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('resources')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl
              .string('name', 50)
              .notNullable()
              .unique();
            tbl.string('description', 400);
            
        })
        .createTable('tasks', tbl => {
            tbl.increments();;
            tbl.string('description', 4000).notNullable();
            tbl.string('notes', 255);
            tbl.boolean('completed').notNullable().defaultTo(false);
            tbl
              .integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE');
        })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks');
};