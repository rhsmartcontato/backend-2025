/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();               // id autoincrement e chave primária
        table.text('username').notNullable();            // username obrigatório
        table.text('email').notNullable().unique();      // email obrigatório e único
        table.text('password').defaultTo('123456');      // senha padrão "123456"
        table.string('role').defaultTo('user').comment('admin/parcial/user'); // papel do usuário
        table.text('photo').comment('link to photo');    // foto do usuário (URL)
        table.timestamp('created_at').defaultTo(knex.fn.now());  // data criação
        table.timestamp('updated_at');                    // data atualização (pode atualizar manualmente)

        // Índices
        table.index(['email', 'password'], 'login');     // índice para login rápido
        table.index(['username'], 'idx_username');       // índice para busca por username
        table.unique(['email'], 'unique_email');         // índice único em email (redundante com unique(), mas ok)
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
