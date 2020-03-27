const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/Connection');

describe('ONG', () => {
  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "ONG do JU",
        email: "raidamjuliano@ong.com.br",
        whatsapp: "62993456732",
        city: "Anapolis",
        uf: "GO"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});