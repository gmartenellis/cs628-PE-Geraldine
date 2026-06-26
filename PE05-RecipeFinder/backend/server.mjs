import express from "express";
import cors from "cors";

import recipes from "./routes/recipes.mjs";
import { connectToServer } from "./db/conn.mjs";

const app = express();

const PORT = process.env.PORT || 5050;

app.use(cors());

app.use(express.json());

app.use("/recipes", recipes);

connectToServer().then(() => {

    app.listen(PORT, () => {

        console.log(`Server is running on port ${PORT}`);

    });

});