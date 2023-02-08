const express = require("express");
const databaseConnection = require("./src/database/dataBase.js");
// import cors from "cors";
const dotenv = require("dotenv");
const SwaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const messageRoute = require("./src/routes/message.routes.js");
const blogRoute = require("./src/routes/blog.routes.js");
const userRoute = require("./src/routes/user.routes.js");

const bcrypt = require('bcrypt')
const app = express();
const port = process.env.PORT;
// const { db } = require('./firebase.js')

// app.use(cors());
app.use(express.json());
dotenv.config(); //importing contents of .env file

//TESTING USERS

app.post('/users', async(req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})
app.get('/users', async(req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})
app.patch('/users', async(req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})
app.delete('/users', async(req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})

//TESTING MESSAGES
app.post('/messages', async(req, res) => {
    const { fname, lname, email, message } = req.body
    if (!fname || !lname || !email || !message) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})
app.get('/messages', async(req, res) => {
    const { fname, lname, email, message } = req.body
    if (!fname || !lname || !email || !message) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})
app.patch('/messages', async(req, res) => {
    const { fname, lname, email, message } = req.body
    if (!fname || !lname || !email || !message) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})
app.delete('/messages', async(req, res) => {
        const { fname, lname, email, message } = req.body
        if (!fname || !lname || !email || !message) {
            res.sendStatus(400)
            return
        }

        res.send({ userId: 0 })
    })
    //TESTING Blogs
app.post('/blogs', async(req, res) => {
    const { title, blogBody } = req.body
    if (!title || !blogBody) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})
app.get('/blogs', async(req, res) => {
    const { title, blogBody } = req.body
    if (!title || !blogBody) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})
app.patch('/blogs', async(req, res) => {
    const { title, blogBody } = req.body
    if (!title || !blogBody) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})
app.delete('/blogs', async(req, res) => {
    const { title, blogBody } = req.body
    if (!title || !blogBody) {
        res.sendStatus(400)
        return
    }

    res.send({ userId: 0 })
})

//define a banch of options eg authenication, authorization
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Martha\'s Express APIs documentation',
            version: '1.0.0',
            description: 'This Is my Brand backend documentation',
            contact: {
                name: 'Martha Iradukunda',
                email: '\nEmail: marthairadukunda1@gmail.com'
            },

        },
        servers: [
            { url: 'http://localhost:6500' }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    in: 'header',
                    bearerformat: 'JWT',
                }
            }
        },

        security: [{
            bearerAuth: []
        }]
    },
    apis: ['./src/routes/*.js'], //all routes are documented
}

const specs = swaggerJSDoc(options)
databaseConnection().then(() => {

    app.use("/api", messageRoute);
    app.use("/api", blogRoute);
    // app.use("/images", express.static("images"));
    app.use('/api', userRoute)
    app.get('/', (req, res) => {
        res.json({ message: "Welcome on our route" })
    })
    app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(specs));

    app.listen(process.env.port, () => {
        console.log("The app is listening on : " + port)
    })
}).catch((error) => {
    console.log(error)
})

module.exports = app


// app.use("/images", express.static("images"))