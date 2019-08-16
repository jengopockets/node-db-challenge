// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3',
      // typeCast: function(completed, next) {
      //   if (completed.type == 'TINY' && completed.length == 1) {
      //     return (completed.string() == '1');
      //   }
      //   return next();
      // }
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    // sqlite will not enforce Foreign Keys by default
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // turns on the FK enforcement
      },
    },
  }

};
