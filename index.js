import express from "express";
import databaseConnection from "./src/database/dataBase";
import cors from "cors";
import dotenv from "dotenv";
import messageRoute from "./src/routes/message.routes";
import blogRoute from "./src/routes/blog.routes";


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 5000;
databaseConnection();

app.use("/api", messageRoute);
app.use("/api", blogRoute);
app.get('/', (req, res) => {
    res.json({ message: "Welcome on our route" })
})

app.listen(port, () => {
    console.log("The app is listening on : " + port)
})


// app.use("/images", express.static("images"))