const request = require('supertest')
const app = require('../index.js')




describe("api/users", () => {
    describe("given a username, email and password", () => {

        test("should respond with a 200 status code", async() => {
            const response = await request(app).post("/users").send({
                username: "username",
                email: "email",
                password: "password"

            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async() => {
            const response = await request(app).post("/users").send({
                username: "username",
                email: "email",
                password: "password"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has userId", async() => {
            const response = await request(app).post("/users").send({
                username: "username",
                email: "email",
                password: "password"
                    // repeatPassword: "repeatPassword"
            })
            expect(response.body.userId).toBeDefined()
        })
    })

    describe("when the username and password is missing", () => {
        test("should respond with a status code of 400", async() => {
            const bodyData = [
                { username: "username" },
                { email: "email" },
                { password: "password" },
                {}
            ]
            for (const body of bodyData) {
                const response = await request(app).post("/users").send(body)
                expect(response.statusCode).toBe(400)
            }
        })
    })



})

//get

describe("api/users", () => {
        describe("given a username, email and password", () => {

            test("should respond with a 200 status code", async() => {
                const response = await request(app).get("/users").send({
                    username: "username",
                    email: "email",
                    password: "password"

                })
                expect(response.statusCode).toBe(200)
            })
            test("should specify json in the content type header", async() => {
                const response = await request(app).get("/users").send({
                    username: "username",
                    email: "email",
                    password: "password"
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })
            test("response has userId", async() => {
                const response = await request(app).get("/users").send({
                    username: "username",
                    email: "email",
                    password: "password"
                })
                expect(response.body.userId).toBeDefined()
            })
        })


    })
    //patch

describe("api/users", () => {
        describe("given email and password", () => {

            test("should respond with a 200 status code", async() => {
                const response = await request(app).patch("/users").send({
                    username: "username",
                    email: "email",
                    password: "password"

                })
                expect(response.statusCode).toBe(200)
            })
            test("should specify json in the content type header", async() => {
                const response = await request(app).patch("/users").send({
                    username: "username",
                    email: "email",
                    password: "password"
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })
            test("response has userId", async() => {
                const response = await request(app).patch("/users").send({
                    username: "username",
                    email: "email",
                    password: "password"
                })
                expect(response.body.userId).toBeDefined()
            })
        })


    })
    //delete

describe("api/users", () => {
    describe("given details of user", () => {

        test("should respond with a 200 status code", async() => {
            const response = await request(app).delete("/users").send({
                username: "username",
                email: "email",
                password: "password"

            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async() => {
            const response = await request(app).delete("/users").send({
                username: "username",
                email: "email",
                password: "password"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has userId", async() => {
            const response = await request(app).delete("/users").send({
                username: "username",
                email: "email",
                password: "password"
            })
            expect(response.body.userId).toBeDefined()
        })
    })


})