const request = require('supertest')
const app = require('../index.js')
    // app.use('/api', blogRoute)


describe("api/blogs", () => {
    describe("given a title and body", () => {

        test("should respond with a 200 status code", async() => {
            const response = await request(app).post("/blogs").send({
                title: "title",
                blogBody: "blogBody"


            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async() => {
            const response = await request(app).post("/blogs").send({
                title: "title",
                blogBody: "blogBody"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has userId", async() => {
            const response = await request(app).post("/blogs").send({
                title: "title",
                blogBody: "blogBody"
            })
            expect(response.body.userId).toBeDefined()
        })
    })

    describe("when the title or Body are missing", () => {
        test("should respond with a status code of 400", async() => {
            const bodyData = [
                { title: "title" },
                { blogBody: "blogBody" },
                {}
            ]
            for (const body of bodyData) {
                const response = await request(app).post("/blogs").send(body)
                expect(response.statusCode).toBe(400)
            }
        })
    })

})

//GET.

describe("api/blogs", () => {
        describe("given a title and body", () => {

            test("should respond with a 200 status code", async() => {
                const response = await request(app).get("/blogs").send({
                    title: "title",
                    blogBody: "blogBody"


                })
                expect(response.statusCode).toBe(200)
            })
            test("should specify json in the content type header", async() => {
                const response = await request(app).get("/blogs").send({
                    title: "title",
                    blogBody: "blogBody"
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })
            test("response has userId", async() => {
                const response = await request(app).get("/blogs").send({
                    title: "title",
                    blogBody: "blogBody"
                })
                expect(response.body.userId).toBeDefined()
            })
        })


    })
    //patch

describe("api/blogs", () => {
        describe("given a title and body", () => {

            test("should respond with a 200 status code", async() => {
                const response = await request(app).patch("/blogs").send({
                    title: "title",
                    blogBody: "blogBody"


                })
                expect(response.statusCode).toBe(200)
            })
            test("should specify json in the content type header", async() => {
                const response = await request(app).patch("/blogs").send({
                    title: "title",
                    blogBody: "blogBody"
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })
            test("response has userId", async() => {
                const response = await request(app).patch("/blogs").send({
                    title: "title",
                    blogBody: "blogBody"
                })
                expect(response.body.userId).toBeDefined()
            })
        })


    })
    //delete

describe("api/blogs", () => {
    describe("given a title and body", () => {

        test("should respond with a 200 status code", async() => {
            const response = await request(app).delete("/blogs").send({
                title: "title",
                blogBody: "blogBody"


            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async() => {
            const response = await request(app).delete("/blogs").send({
                title: "title",
                blogBody: "blogBody"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has userId", async() => {
            const response = await request(app).delete("/blogs").send({
                title: "title",
                blogBody: "blogBody"
            })
            expect(response.body.userId).toBeDefined()
        })
    })


})