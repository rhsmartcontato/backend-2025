/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTbale('payments', function(table) {
    table.increments('id').primary();
    table.integer('user_id').notNullable().comment('quem realizou o pagamento');
    table.integer('user_control').comment('usuario que criou o registro');
    table.float('value').notNullable();
    table.text('receipt').notNullable();
    table.text('obs');
    table.timestamp('paymentdate').notNullable();
    table.boolean('verified').defaultTo(false).comment('verificado');
    table.text('photo').comment('link para foto do comprovante')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('update_at');

    table.index(['paymentdate'], 'all payment of date');
    table.index(['value'], 'range of value');
    table.index(['paymentdate', 'value'], 'all payment beetweend date and value');
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTableIfExists('payments');
  
};
