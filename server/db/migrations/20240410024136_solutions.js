/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('solutions', function (table) {
    table.integer('id').primary()
    table.varchar('title')
    table.datetime('date')
    table.text('body')
    table.integer('author_id')
    table.boolean('is_published')
    table.integer('upvotes')
    table.integer('downvotes')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('solutions')
}
