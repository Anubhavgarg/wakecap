const server = 'http://127.0.0.1:8000';
const chai = require('chai');
const assert = require('assert');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const nock = require('nock')
describe('file output', () => {
    it('Read file', async() => {
        nock(server)
            .post("/api/v1/file")
            .reply(200, {
                "success": true,
                "response": "Output done"
            });

        chai.request(server)
            .post('/api/v1/file')
            .send()
            .set('Content-Type', 'multipart/form-data')
            .end(function(err, res) {
                assert.deepEqual(res.body, { success: true, response: 'Output done' })
                return;
            });
    });
});