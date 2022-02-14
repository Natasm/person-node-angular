const supertest = require('supertest');
const app = require('../server.js');

var id = -1;
var id_professon = -1;

test('GET /person', async () => {
const response = await supertest(app).get('/person');

expect(response.statusCode).toEqual(200);
});

test('POST /person', async () => {
    const person = {
        name: "Natan",
        email: "natan@gmail.com",
        phone: "558899999999"
    }
    const response = await supertest(app).post('/person').send(person);

    expect(response.statusCode).toEqual(201);
    expect(response.body.name).toEqual("Natan");
    expect(response.body.email).toEqual("natan@gmail.com");
    expect(response.body.phone).toEqual("558899999999");

    id = response.body.id;
});

test('GET /person/:id', async () => {
    const response = await supertest(app).get('/person' + '/' + id);

    expect(response.statusCode).toEqual(200);
    expect(response.body.id).toEqual(id);
});

test('PUT /person/:id', async () => {
    const person = {
        name: "Natan",
        email: "natansm@gmail.com",
        phone: "558899999999"
    }
    const response = await supertest(app).put('/person' + '/' + id).send(person);

    expect(response.statusCode).toEqual(200);
});

test('DELETE /person/:id', async () => {
    const response = await supertest(app).delete('/person' + '/' + id);

    expect(response.statusCode).toEqual(200);
});

test('GET /profession', async () => {
    const response = await supertest(app).get('/profession');

    expect(response.statusCode).toEqual(200);
});

test('POST /profession', async () => {
    const profession = {
        name: "Programador",
    }
    const response = await supertest(app).post('/profession').send(profession);

    expect(response.statusCode).toEqual(201);
    expect(response.body.name).toEqual("Programador");

    id_profession = response.body.id;
});

test('GET /profession/:id', async () => {
    const response = await supertest(app).get('/profession' + '/' + id_profession);

    expect(response.statusCode).toEqual(200);
    expect(response.body.id).toEqual(id_profession);
});

test('PUT /profession/:id', async () => {
    const profession = {
        name: "Programador (DEV)"
    }
    const response = await supertest(app).put('/profession' + '/' + id_profession).send(profession);

    expect(response.statusCode).toEqual(200);
});

test('DELETE /profession/:id', async () => {
    const response = await supertest(app).delete('/profession' + '/' + id_profession);

    expect(response.statusCode).toEqual(200);
});

test('POST /profession', async () => {
    const profession = {
        name: "Programador",
    }
    const response = await supertest(app).post('/profession').send(profession);

    expect(response.statusCode).toEqual(201);
    expect(response.body.name).toEqual("Programador");

    id_profession = response.body.id;
});

test('POST /person with profession', async () => {
    const person = {
        name: "Natan",
        email: "n@gmail.com",
        phone: "558899999991",
        profession_id: id_profession
    }
    const response = await supertest(app).post('/person').send(person);

    expect(response.statusCode).toEqual(201);
    expect(response.body.name).toEqual("Natan");
    expect(response.body.email).toEqual("n@gmail.com");
    expect(response.body.phone).toEqual("558899999991");
    expect(response.body.profession_id).toEqual(id_profession);

    id_profession = response.body.id;
});
