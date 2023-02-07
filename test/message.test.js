const app = require('../index.js')
const request = require('supertest')
describe('All messages', () => {
    test('Should return all messages', async() => {
        const responses = await request(app).get('/api/messages');
        expect(responses.status).toBe(200)
    })
})