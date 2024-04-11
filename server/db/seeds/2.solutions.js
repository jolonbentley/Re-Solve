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
      challenge_id: 1,
      title: 'Addition',
      date: '2024-04-01 12:30:00',
      body: 'Solved problem 1 goes here',
      author_id: 1,
      is_published: true,
      upvotes: 3,
      downvotes: 7,
    },
    {
      id: 2,
      challenge_id: 1,
      title: 'Addition',
      date: '2024-04-01 18:30:00',
      body: 'Solved problem 2 goes here',
      author_id: 1,
      is_published: true,
      upvotes: 4,
      downvotes: 1,
    },
    {
      id: 3,
      challenge_id: 1,
      title: 'Addition',
      date: '2024-04-01 19:30:00',
      body: 'Solved problem 3 goes here',
      author_id: 1,
      is_published: true,
      upvotes: 3,
      downvotes: 1,
    },
    {
      id: 4,
      challenge_id: 4,
      title: 'Preferred language',
      date: '2024-04-01 20:30:00',
      body: 'Solved problem goes here',
      author_id: 1,
      is_published: true,
      upvotes: 0,
      downvotes: 0,
    },
  ])
}
