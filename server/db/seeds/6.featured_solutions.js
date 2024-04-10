/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('featured_solutions').del()
  await knex('featured_solutions').insert([
    { id: 1, solution_id: 1 },
    { id: 2, solution_id: 2 },
  ])
}
