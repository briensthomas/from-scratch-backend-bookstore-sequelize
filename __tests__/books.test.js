const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('backend-express-template routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Authors.bulkCreate([
        {
          firstName: 'Bryce',
          lastName: 'O\'Connor',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Will',
          lastName: 'Wight',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]);
      await db.Books.bulkCreate([
        {
          title: 'Iron Prince',
          genre: 'Fantasy',
          releasedYear: 2020,
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Dreadgod',
          genre: 'Fantasy',
          releasedYear: 2022,
          authorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]);
    } catch (err) {
      console.log(err);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it('#GET /books returns a status 200', async () => {
    const res = await request(app).get('/api/v1/books');
    expect(res.status).toBe(200);
  });

  it('#GET /books should return a list of two books', async () => {
    const res = await request(app).get('/api/v1/books');

    expect(res.body.length).toBe(2);
    expect(res.body).toEqual([
      {
        id: expect.any(Number),
        title: 'Iron Prince',
        genre: 'Fantasy',
        releasedYear: 2020,
        authorId: 2,
        createdAt: expect.any(String),
        updatedAt:expect.any(String),
      },
      {
        id: expect.any(Number),
        title: 'Dreadgod',
        genre: 'Fantasy',
        releasedYear: 2022,
        authorId: 3,
        createdAt: expect.any(String),
        updatedAt:expect.any(String),
      }
    ]);
  });
});
