import blogtest from "../middleware/Models/blog.model";
const request = require("supertest");


// describe('Space test suite', () => {
//     it('My Space Test', () => {
//         expect(true).toEqual(true);
//     });
// });
// exports.updatPost = async(req, res) => {
//     try {
//         const blog = await Blog.findById(req.params.id);
//         if (!blog) return res.status(404).json({ status: "fail", error: "The blog is not found" })
//         const updatedBlog = await Post.findByIdAndUpdate(req.params.id, {
//             $set: {
//                 title: req.body.title,
//                 blogBody: req.body.blogBody
//             }
//         }, { new: true });
//         return res.status(200).json({
//             status: "success",
//             data: updatedBlog
//         });
//     } catch (error) {
//         return res.status(500).json({ status: "error", error: error.message });
//     }
// }
describe("Crud for blog", () => {
    describe("creating post", () => {
        it("should return 201 if blog created successfuly", async() => {

            const blog = {
                "title": "blog title for testing",
                "blogBody": "the body of blog",
            };
            constres = res = await request(app).post("/blogs").send(blog);
            expect(res.status).toBe(201);
        });

    });
});