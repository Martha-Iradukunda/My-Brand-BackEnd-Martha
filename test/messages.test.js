const request = require('supertest')
const app = require('../index.js')




describe("api/messages", () => {
        describe("given a firstName, lastName, email and message", () => {

            test("should respond with a 200 status code", async() => {
                const response = await request(app).post("/messages").send({
                    fname: "fname",
                    lname: "lname",
                    email: "email",
                    message: "message"

                })
                expect(response.statusCode).toBe(200)
            })
            test("should specify json in the content type header", async() => {
                const response = await request(app).post("/messages").send({
                    fname: "fname",
                    lname: "lname",
                    email: "email",
                    message: "message"
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })
            test("response has userId", async() => {
                const response = await request(app).post("/messages").send({
                    fname: "fname",
                    lname: "lname",
                    email: "email",
                    message: "message"
                })
                expect(response.body.userId).toBeDefined()
            })
        })

        describe("when the firstName, message and email are missing", () => {
            test("should respond with a status code of 400", async() => {
                const bodyData = [
                    { fname: "fname" },
                    { email: "email" },
                    { message: "message" },
                    {}
                ]
                for (const body of bodyData) {
                    const response = await request(app).post("/messages").send(body)
                    expect(response.statusCode).toBe(400)
                }
            })
        })

    })
    //get


describe("api/messages", () => {
        describe("getting messages", () => {

            test("should respond with a 200 status code", async() => {
                const response = await request(app).get("/messages").send({
                    fname: "fname",
                    lname: "lname",
                    email: "email",
                    message: "message"

                })
                expect(response.statusCode).toBe(200)
            })
            test("should specify json in the content type header", async() => {
                const response = await request(app).get("/messages").send({
                    fname: "fname",
                    lname: "lname",
                    email: "email",
                    message: "message"
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })
            test("response has userId", async() => {
                const response = await request(app).get("/messages").send({
                    fname: "fname",
                    lname: "lname",
                    email: "email",
                    message: "message"
                })
                expect(response.body.userId).toBeDefined()
            })
        })


    })
    //patch
describe("api/messages", () => {
        describe("getting messages", () => {

            test("should respond with a 200 status code", async() => {
                const response = await request(app).patch("/messages").send({
                    fname: "fname",
                    lname: "lname",
                    email: "email",
                    message: "message"

                })
                expect(response.statusCode).toBe(200)
            })
            test("should specify json in the content type header", async() => {
                const response = await request(app).patch("/messages").send({
                    fname: "fname",
                    lname: "lname",
                    email: "email",
                    message: "message"
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })
            test("response has userId", async() => {
                const response = await request(app).patch("/messages").send({
                    fname: "fname",
                    lname: "lname",
                    email: "email",
                    message: "message"
                })
                expect(response.body.userId).toBeDefined()
            })
        })


    })
    //delete

describe("api/messages", () => {
    describe("getting messages", () => {

        test("should respond with a 200 status code", async() => {
            const response = await request(app).delete("/messages").send({
                fname: "fname",
                lname: "lname",
                email: "email",
                message: "message"

            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async() => {
            const response = await request(app).delete("/messages").send({
                fname: "fname",
                lname: "lname",
                email: "email",
                message: "message"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has userId", async() => {
            const response = await request(app).delete("/messages").send({
                fname: "fname",
                lname: "lname",
                email: "email",
                message: "message"
            })
            expect(response.body.userId).toBeDefined()
        })
    })


})