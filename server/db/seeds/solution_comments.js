/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('solution_comments').del()
  await knex('solution_comments').insert([
    {
      id: 1,
      author_id: 1,
      comment: 'This is a comment',
      date: '2024-04-02 12:00:00',
    },
    {
      id: 2,
      author_id: 1,
      comment: 'This is a comment',
      date: '2024-04-02 13:00:00',
    },
  ])
}
