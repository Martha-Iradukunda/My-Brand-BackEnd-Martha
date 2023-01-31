import express from "express";
import databaseConnection from "./src/database/dataBase";
import cors from "cors";
import dotenv from "dotenv";

import messageRoute from "./src/routes/message.routes";
import blogRoute from "./src/routes/blog.routes";
import userRoute from "./src/Routes/user.routes";


// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerDocumentations from "./src/helpers/documentations";
// import swaggerDoc from "swagger-ui-express";

const bcrypt = require('bcrypt')


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config(); //importing contents of .env file



const port = process.env.PORT || 8000;
databaseConnection();

// app.use("/documentations" ,swaggerDoc.serve)
// app.use("/documentations" ,swaggerDoc.setup(swaggerDocumentations))

app.use("/api", messageRoute);
app.use("/api", blogRoute);
// app.use("/images", express.static("images"));
app.use('/api', userRoute)



app.get('/', (req, res) => {
    res.json({ message: "Welcome on our route" })
})

app.listen(port, () => {
    console.log("The app is listening on : " + port)
})

export default app

// app.use("/images", express.static("images"))