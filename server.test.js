const request= require('supertest');
const server = require('./server.js');
const app = require('./routes/User');
const mongoose = require('mongoose');

describe('Test the Route path', () => {
    test('It should response the GET method', () => {
        const response = request(app).post('http://localhost:8000/User/add').send({
            "name": "test",
            "email": "hello",
            "Age"   : 20,
            "Contact" : 1234567890
        });
            expect(response.statusCode).toBe(200);
    });
});