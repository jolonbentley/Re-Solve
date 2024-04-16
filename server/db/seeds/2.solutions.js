/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('solutions').del()
  await knex('solutions').insert([
    {
      id: 1,
      date: '2024-02-27 14:00:00',
      body: 'Test Solution 1 - Phteven',
      author_id: 1,
      upvotes: 0,
      downvotes: 0,
      challenge_id: 1,
    },
    {
      id: 2,
      date: '2024-02-27 14:00:00',
      body: 'Test Solution 2 - Tyler',
      author_id: 2,
      upvotes: 0,
      downvotes: 0,
      challenge_id: 1,
    },
  ])
}
